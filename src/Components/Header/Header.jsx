import React, { useState } from 'react'
import './Header.css'

const Header = () => {

const[active, setActive] = useState(false)

const toggleBurger = () => {
    setActive(!active)
}

 

  return (
  <>
  <header className="header">
    <div className="container">
        <div className="header__wrapp">
            <img src="./logo.svg" alt="" className="logo" />
            <div className={`header__menu ${active ? 'active' : ''}`}>
             
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#footer">Contacts</a>
            </div>
            <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  </header>
  
  </>
  )
}

export default Header