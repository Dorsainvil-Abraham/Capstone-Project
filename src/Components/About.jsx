import React from 'react'
import img01 from '../Images/aboutImg01.jpg'
import img02 from '../Images/aboutImg02.jpg'
import './About.css'

function About() {
  return (
    <>
    <h2 style={{textAlign: 'center'}}>About Us!</h2>
    <br />
    <div className='aboutus'>
        <div className="about">
            <h1>Little Lemon</h1>
            <br />
            <h3>Chicago</h3>
            <br />
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.</p>
        </div>
        <div className="images">
            <img src={img01} alt="image01"  />
            <img src={img02} alt="image02"  />
        </div>
    </div>
    </>
  )
}

export default About