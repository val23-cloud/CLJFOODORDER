import React, { useContext } from 'react'
import './MenuDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const MenuDisplay = (props) => {
    const {menu} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='menudisplay'>
        <div className="menudisplay-left">
<div className="menudisplay-img-list">
   
    
</div>
<div className="menudisplay-img">
    <img className='menudisplay-main-img' src={menu.image} alt="" />
</div>
        </div>
        <div className="menudisplay-right">
<h1>{menu.name}</h1>
<div className="menudisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>
        (122)
    </p>
</div>
<div className="menudisplay-right-prices">
    <div className="menudisplay-right-price-old">Rs.{menu.old_price}</div>
    <div className="menudisplay-right-price-new">Rs.{menu.new_price} </div>
</div>
<div className="menudisplay-right-desc">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti fugiat fuga voluptatibus molestias similique placeat eaque, excepturi quod ipsa vel sed enim veritatis dicta soluta repellendus vitae voluptatem. Et.
</div>
<div className="menudisplay-right-size">
    
    <div >
        <div></div>
        <div></div>
    </div>
</div>
<button onClick={()=>{addToCart(menu.id)}}>ADD TO CART</button>


        </div>
    </div>
  )
}

export default MenuDisplay