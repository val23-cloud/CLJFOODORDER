import React, { useEffect, useState } from 'react'
import './ListMenu.css'
import cross_icon from '../../assets/cross_icon.png'

const ListMenu = () => {

  const [allmenus,setAllMenus] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allmenus')
    .then((res)=>res.json())
    .then((data)=>{setAllMenus(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_menu = async (id)=>{
    await fetch('http://localhost:4000/removemenu',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-menu'>
      <h1>All Menus List</h1>
      <div className="listmenu-format-main">
        <p>Menus</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listmenu-allmenus">
        <hr />
          {allmenus.map((menu,index)=>{
              return <>
              <div key={index} className="listmenu-format-main listmenu-format">
                  <img src={menu.image}  alt="" className="listmenu-menu-icon" />
                  <p>{menu.name}</p>
                  <p>Rs.{menu.old_price}</p>
                  <p>Rs.{menu.new_price}</p>
                  <p>{menu.category}</p>
                  <img onClick={()=>{remove_menu(menu.id)}} className='listmenu-remove-icon' src={cross_icon} alt="" />
              </div>
              <hr />
              </> 
          })}
      </div>
    </div>
  )
}

export default ListMenu