import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <>
   <section id="home" className='Hero'>
    <div className="container">
        <div className="hero__wrapp">
<div className="hero__wrapp-about">

   <h2>Building digital products, brands & experience</h2>
   <p>Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt</p>
   <a href="#footer">Contact Us</a>
 
</div>
<div className="hero__wrapp-img">
    <img src="./hero-img.png" alt="" className='hero__img'/>
</div>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Hero