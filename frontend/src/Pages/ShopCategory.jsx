import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className="shopcategory-indexSort">
        
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} height={item.height} width={item.width} />
            }
            else{
              return null;
            }
        })}
      </div>
      
    </div>
  )
}

export default ShopCategory