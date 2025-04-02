import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Zoom from './Components/Zoom/Zoom'
import Sys from './Components/Sys/Sys'
import Plagin from './Components/Plagin/Plagin'
import Cards from './Components/Cards/Cards'
import Part from './Components/Part/Part'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Header />
   <Hero  />
   <Zoom/>
   <Sys />
   <Plagin/>
   <Cards/>
   <Part  />
   <Footer/>
   </>
  )
}

export default App