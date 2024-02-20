const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
require("dotenv").config()


app.use(express.json());
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_SECRET)

app.post('/create-checkout-session', async(req, res) => {
    const menus = req.body

    const lineItems = menus.map((menu) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: menu.name

            },
            unit_amount: Math.round(menu.new_price * 100)
        },
        quantity: menu.count
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/payment-success",
        cancel_url: "http://localhost:3000/payment-failure",

    })

    res.json({id: session.id})
})



// Database connection with mongodb

mongoose.connect("mongodb+srv://crazylittlejuni:crazylittlejuni@cluster0.jym6n2j.mongodb.net/cljfood")

//API creation

app.get("/",(req,res)=>{
    res.send("Express App is running")
})

//image storage engine

const storage=multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})
//creating upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('menu'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for Creating menu

const Menu = mongoose.model("Menu",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addmenu',async (req,res)=>{
    let menus =await Menu.find({});
    let id;
    if(menus.length>0){
        let last_menu_array = menus.slice(-1);
        let last_menu =last_menu_array[0];
        id= last_menu.id+1;
    }
    else{
        id=1;
    }
    const menu = new Menu({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(menu);
    await menu.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })

})

//creating API for deleting menus

app.post('/removemenu',async (req,res)=>{
    await Menu.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API for getting all memu
app.get('/allmenus',async (req,res)=>{
    let menus= await Menu.find({});
    console.log("All Menus Fetched");
    res.send(menus);
})

//Schema creating for User model

const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
       type:String,
       unique:true, 
    },
    password:{
        type:String,

    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint for registering the user
app.post('/signup',async (req,res)=>{
   
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
       cart[i]=0; 
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login

app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"})
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

//craeting endpoint for newcollection data
app.get('/newcollections',async (req,res)=>{
    let menus = await Menu.find({});
    let newcollection = menus.slice(1).slice(-8);
    console.log("New food items fetched");
    res.send(newcollection);
})

//craeting endpoint for popular in women section
app.get('/popularinbreakfast',async (req,res)=>{
    let menus = await Menu.find({category:"breakfast"});
    let popular_in_breakfast = menus.slice(0,3);
    console.log("Popular in Breakfast fetched");
    res.send(popular_in_breakfast);
})

//creating middleware to fetch user
    const fetchUser = async(req,res,next)=>{
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
        else{
            try{
                const data = jwt.verify(token,'secret_ecom');
                req.user = data.user;
                next();
            }catch(error){
                res.status(401).send({errors:"please authenticate using a valid token"})
            }
        }
    }

//creating endpoint for adding menu in cartdata
app.post('/addtocart',fetchUser,async (req,res)=>{
    console.log("added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

//creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})
//creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
if(!error){
    console.log("Server running on port "+port)
}
else{
    console.log("Error: "+error)
}
})