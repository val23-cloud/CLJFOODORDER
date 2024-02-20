import React from 'react'
import './Hero.css'


import hero_image from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>Celebrating Kerala's taste</h2>
<div className='hero-hand-icon'>
<p>WELCOME!</p>

</div>
<p>to</p>
<p>CLJ-Culinary Lover's Junction</p>
</div>

<div className="hero-right">
<img src={hero_image} alt='' />
</div>
    </div>
  )
}

export default Hero

