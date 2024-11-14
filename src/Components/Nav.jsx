import React from 'react'
import './Nav.css'
import Logo from '../Images/LittleLemonLogo.jpg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <>
      <nav>
        <div className='classLogo'>
            <img src={Logo} alt="LittleLemon Logo" />
        </div>
        <div className='classNav'>
                <Link to='/'>HOME</Link>
                <Link>ABOUT</Link>
                <Link to='/reservation'>RESERVATIONS</Link>
                <Link>ORDER ONLINE</Link>
                <Link>LOGIN</Link>
        </div>
        {/*<FaBars className='bars' />*/}
     </nav>
     <div className="secondNav">
                <Link to='/'>HOME</Link>
                <Link>ABOUT</Link>
                <Link to='/reservation'>RESERVATIONS</Link>
                <Link>ORDER ONLINE</Link>
                <Link>LOGIN</Link>
        </div>
    </>
  )
}

export default Nav