import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/cljlogo.png'
import instagram_icon from '../Assets/instagram_icon1.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <Link to='/' style={{ textDecoration: 'none' }}>
                    <img src={footer_logo} alt='' />
                </Link>
            <p>CLJ</p>
        </div>
        <ul className='footer-links'>
            
        <li><Link to='/' style={{ textDecoration: 'none',color:'white' }}>Home</Link></li>
        <li><Link to='/breakfast' style={{ textDecoration: 'none',color:'white' }}>Breakfast</Link></li>
        <li><Link to='/veg' style={{ textDecoration: 'none',color:'white' }}>Veg</Link></li>
        <li><Link to='/nonveg' style={{ textDecoration: 'none',color:'white' }}>Non-veg</Link></li>
        <li><Link to='/contact' style={{ textDecoration: 'none',color:'white' }}>Contact</Link></li>
        </ul>
        <div>
            <p>Nithin Benny</p>
            <h3>Hotel Anna
            </h3>
            <h5>Near CWRDM,Kottamparamba,Kozhikode-8</h5>
            <h6>Contact:
                9605197051
                7012997146
            </h6>
        </div>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ CLJ2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer