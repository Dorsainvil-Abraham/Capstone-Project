import React from 'react'
import LogoFooter from '../Images/logo-white.png'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="classImg">
          <img src={LogoFooter} alt="logo" />
        </div>
        <div className="sitemap">
            <h3>SITEMAP</h3>
            <div className='footLink'>
                <Link to='/' >Home</Link>
                <Link to='' >About</Link>
                <Link>Menu</Link>
                <Link to='/reservation' >Resevations</Link>
                <Link>Order Online</Link>
                <Link>Login</Link>
            </div>

        </div>
        <div className="classContact">
            <h3>CONTACT US</h3>
            <p>578 Poli Ave, Chicago</p>
            <p>(312) 547-3456</p>
            <p>littlelemonrest@gmail.com</p>
        </div>

        <div className="classContact">
            <h3>CONNECT WITH US</h3>
            <div className="reseaux">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
        </div>
    </footer>
  )
}

export default Footer