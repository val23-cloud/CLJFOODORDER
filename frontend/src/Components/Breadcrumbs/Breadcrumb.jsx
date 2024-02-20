import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {menu}=props;

  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt=''/> ORDER <img src={arrow_icon} alt="" />{menu.category} <img src={arrow_icon} alt="" />{menu.className}
    </div>
  )
}

export default Breadcrumb