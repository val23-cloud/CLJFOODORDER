import React from 'react'
import './Relatedmenu.css'
import data_product from '../Assets/relatedmenu'
import Items from '../Items/Items'

const Relatedmenu = () => {
  return (
    <div className='relatedmenu'>
        <h1>Recommended Food Items</h1>
        <hr/>
        <div className="relatedmenu-items">
{data_product.map((item,i)=>{
return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} height={item.height} width={item.width} />
})}
        </div>
    </div>
  )
}

export default Relatedmenu