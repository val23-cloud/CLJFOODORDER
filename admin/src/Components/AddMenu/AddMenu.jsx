import React, { useState } from 'react'
import './AddMenu.css'
import upload_area from '../../assets/upload_area.svg'

const AddMenu = () => {

  const [image,setImage] = useState(false);
  const [menuDetails,setMenu]= useState({
    name:"",
    image:"",
    category:"breakfast",
    new_price:"",
    old_price:""
  })

  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }
  const changeHandler = (e) =>{
    setMenu({...menuDetails,[e.target.name]:e.target.value})
  }

  const Add_Menu = async ()=>{
    console.log(menuDetails);
    let responseData;
    let menu = menuDetails;

    let formData = new FormData();
    formData.append('menu',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});
  
    if(responseData.success)
    {
      menu.image= responseData.image_url;
      console.log(menu);
      await fetch('http://localhost:4000/addmenu',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(menu),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Menu Added"):alert("Failed")
      })
    }
  }

  return (
    <div className='add-menu'>
        <div className="addmenu-itemfield">
            <p>Menu title</p>
            <input value={menuDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="addmenu-price">
          <div className="addmenu-itemfield">
            <p>Price</p>
            <input value={menuDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type Here' />
          </div>
          <div className="addmenu-itemfield">
            <p>New Price</p>
            <input value={menuDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type Here' />
          </div>
        </div>
        <div className="addmenu-itemfield">
          <p>Menu Category</p>
          <select value={menuDetails.category} onChange={changeHandler} name="category" className='add-menu-selector'>
            <option value="breakfast">Breakfast</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>
        <div className="addmenu-itemfield">
          <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addmenu-thumnail-img' alt="" />
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Menu()}} className='addmenu-btn'>ADD MENU</button>
    </div>
  )
}

export default AddMenu