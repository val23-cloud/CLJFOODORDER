import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/offer3.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Discounts and Offers</h1>
            <h1>For you</h1>
            <p>ONLY ON BEST SELLERS</p>
           
        </div>
        <div className="offers-right">
            <img src={exclusive_img} alt=''/>

        </div>
    </div>
  )
}

export default Offers