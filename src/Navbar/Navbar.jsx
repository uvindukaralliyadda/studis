import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/Images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    const navHeight = document.querySelector('.nav')?.offsetHeight || 0

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className='nav'>
      <div className='nav-left'>
        <img src={logo} alt="Studio Chaya Logo"/>
        <div className='nav-left-p'>
          <p className='nav-logo'><span className='navp'>Studio</span> Chaya</p>
          <p className='nav-slogan'>The Gallery <span className='navp'>Of Your Life</span></p>
        </div>
      </div>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='#hero' onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href='#products' onClick={() => setMenuOpen(false)}>Categories</a></li>
          <li><a href='#' onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href='#' onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href='#' onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href='#' onClick={() => setMenuOpen(false)}>Visit Facebook</a></li>
          <li><a href='#' onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
