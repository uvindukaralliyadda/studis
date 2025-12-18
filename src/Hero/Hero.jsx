import React from 'react'
import './Hero.css'
import hero from '../assets/Images/Hero.jpg'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <img src={hero}/>
    </div>
  )
}

export default Hero
