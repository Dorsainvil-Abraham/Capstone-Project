import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Menu from '../Components/Menu'
import Testimonials from '../Components/Testimonials'
import About from '../Components/About'

function Layout() {
  return (
    <div>
       <Hero />
       <Menu />
       <Testimonials />
       <About />
    </div>
  )
}

export default Layout