import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/cljlogo.png';
import cart_icon from '../Assets/cartlogo.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/down-arrow.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const isLoggedIn = !!localStorage.getItem('auth-token');

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <img src={logo} alt="" height={150} width={150} />
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p>CLJ</p>
                </Link>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" height={40} width={40} />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("home") }}>
                    <Link className='link' style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {menu === "home" ? <hr /> : <></>}
                </li>
                {isLoggedIn && (
                    <>
                        <li onClick={() => { setMenu("about") }}>
                            <Link className='link' style={{ textDecoration: 'none' }} to='/about'>About</Link>
                            {menu === "about" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("feedback") }}>
                            <Link className='link' style={{ textDecoration: 'none' }} to='/feedback'>Feedback</Link>
                            {menu === "feedback" ? <hr /> : <></>}
                        </li>
                    </>
                )}
                <li onClick={() => { setMenu("breakfast") }}>
                    <Link className='link' style={{ textDecoration: 'none' }} to='/breakfast'>Breakfast</Link>
                    {menu === "breakfast" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("veg") }}>
                    <Link className='link' style={{ textDecoration: 'none' }} to='/veg'>Veg</Link>
                    {menu === "veg" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("non-veg") }}>
                    <Link className='link' style={{ textDecoration: 'none' }} to='/nonveg'>Non-veg</Link>
                    {menu === "non-veg" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                {isLoggedIn
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
                    : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>}
                <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt=''></img></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
