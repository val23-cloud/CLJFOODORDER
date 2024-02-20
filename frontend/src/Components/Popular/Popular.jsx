import React, { useEffect, useState } from 'react'
import './Popular.css'
import Items from '../Items/Items' 
const Popular = () => {

  const [popularMenus,setPopularMenus] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinbreakfast')
    .then((response)=>response.json())
    .then((data)=>setPopularMenus(data));
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN BREAKFAST</h1>
      <hr />
      <div className="popular-item">
        {popularMenus.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} height={item.height} width={item.width}/>
        })}
      </div>
    </div>
  )
}

export default Popular