import React from 'react'
import '../Components/Navbar/Navbar.css'
import navlogo from '../assets/cljlogo.png'
import navProfile from  '../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' height={100} width={100} />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar