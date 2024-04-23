import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images/about-img.png'

function About() {
  

  return (
    <div className="about-page-container">
       <img src={image} alt='car image' className='about-image' /> 
        <div className="about-page-content">
            <h1>Unlock the freedom to roam far and wide.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel car and SUV rental. Our vehicles are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
            <p>Our team is full of enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-page-box">
            <h2>Your destination is waiting.<br />Your car is ready.</h2>
            <Link className="link-button" to="/cars">Explore our cars</Link>
        </div>
    </div>
  )
}

export default About