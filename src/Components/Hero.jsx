import React from 'react'
import image from '../Images/PictureBackground.jpg'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const navigate = useNavigate()

  return (
    <header>
      <div className="information">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
           We are a family owned Mediterranean restaurant,
           focused on traditional recipes served with a modern twist.
        </p>
        <button onClick={() => navigate('reservation')}>Reserve a table</button>
      </div>

      <div className="image">
        <img src={image} alt="picture" />
      </div>
    </header>
  )
}

export default Hero