import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Products from './assets/Products/Products'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
