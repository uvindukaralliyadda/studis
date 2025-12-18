import React from 'react'
import './Footer.css'
import logo from '../assets/Images/logo2.jpeg'
import facebook from '../assets/Images/facebook.png'
import instagram from '../assets/Images/instagram.png'
import tiktok from '../assets/Images/tiktok.png'

const Footer = () => {
  return (
    <div className='footer' >
      <div className='footer_columns'>
        <img src={logo} className='logo'/>
        <p>Custom Mug Printing & Photo Framing Studio.</p>
      </div>
      <div className='footer_columns'>
        <h3>Quick Links</h3>
        <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Visit Facebook</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='footer_columns'>
        <h3>Services</h3>
        <ul>
            <li>Mug Printing</li>
            <li>Photo Framing</li>
            <li>Custom Gifts</li>
        </ul>
      </div>
      <div className='footer_columns'>
        <h3>Our Socials</h3>
        <div className='social_images'>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={tiktok}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
