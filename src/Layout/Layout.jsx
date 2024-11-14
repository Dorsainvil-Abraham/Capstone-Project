import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Testimonials from '../Components/Testimonials'
import About from '../Components/About'

function Layout() {
  return (
    <div>
       <Header />
       <Main />
       <Testimonials />
       <About />
    </div>
  )
}

export default Layout