import React from 'react'
import './Header.css'
import whatsapp from '../assets/Images/whatsapp.png'
import facebook from '../assets/Images/facebook.png'
import instagram from '../assets/Images/instagram.png'
import tiktok from '../assets/Images/tiktok.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <img src={whatsapp}></img>
            <p>(+94) 70 123 4567</p>
        </div>
        <div className='header-right'>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={tiktok}/>
        </div>
    </div>
  )
}

export default Header
