import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Items from '../Items/Items'

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW FOOD ITEMS</h1>
        <hr/>
        <div className="collections">
{new_collection.map((item,i)=>{
    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} height={item.height} width={item.width} />
})}
        </div>
    </div>
  )
}

export default NewCollections