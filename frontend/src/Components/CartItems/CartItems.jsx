import React, { useState,useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { loadStripe } from '@stripe/stripe-js'
import { Link } from 'react-router-dom';

const CartItems = () => {
    const [showLogin, setShowLogin] = useState(false);
    const makePayment = async() => {
        const isAuthenticated = localStorage.getItem('auth-token') !== null;
        if (isAuthenticated) {
        const stripe_publishable_key =  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
        console.log(stripe_publishable_key)

        const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
        console.log("BK" + BACKEND_URL)
        console.log("BK")


        const stripe = await loadStripe(stripe_publishable_key)

        const filteredMenus = all_product.filter(e => cartItems[e.id] > 0).map(e => ({
            ...e,
            count: cartItems[e.id] // Add id property if it doesn't exist in e
        }));        console.log(filteredMenus)

        

        const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filteredMenus)
        })

        const session = await response.json()

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })

        if(result.error) {
            console.log(result.error)
        }
    }else{
        setShowLogin(true);
    }
}



    const {getTotalCartAmount,all_product,cartItems,removeFromCart,addToCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
<div className="cartitems-format-main">
    <p>Food Items</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e) => {
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <div className='cartitems-quantity-container'>
                        <button className='cartitems-quantity-btn' onClick={() => { removeFromCart(e.id) }}>-</button>
                        <span className='cartitems-quantity'>{cartItems[e.id]}</span>
                        <button className='cartitems-quantity-btn' onClick={() => { addToCart(e.id) }}>+</button>
                    </div>
                <p>Rs.{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
    })}
<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Total</h1>
        
        <div>
            <div className="cartitems-total-item">
                <p>Sub Total</p>
                <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Delivery Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
        </div>
        <button onClick={makePayment} style={{background: "green"}}>PROCEED TO CHECKOUT</button>
    </div>
</div>
 {/* Render Login Modal or Redirect to Login Page */}
 {showLogin && (
        /* Use a modal or a separate page for login */
        <div className="login-modal">
          <h2>Please log in to proceed to checkout</h2>
          {/* Render your login form or use a Link to navigate to the login page */}
          <Link to="/login">
            <button onClick={() => setShowLogin(false)}>Go to Login Page</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartItems