import React from 'react'
import Adrien from '../Images/Adrien Gordon.jpg'
import Camila from '../Images/Camila Perez.jpg'
import James from '../Images/James Hwang-Lee.jpg'
import Tamika from '../Images/Tamika Nkoudou.jpg'
import './Testimonials.css'

function Testimonials() {
  return (
    <div className='parent'>
      <div>
        <h2>What people says about us!</h2>
      </div>
      <div className="cardparent">
             <Users image={Tamika} name='Tamika Nkoudou'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
             />
             <Users image={James} name='James Hwang-Lee'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
             />
             <Users image={Camila} name='Camila Perez'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
             />
             <Users image={Adrien} name='Adrien Gordon'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
             />
      </div>
    </div>
  )
}

export default Testimonials



function Users (props) {
    return(
      <div className="testify">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <br />
        <div className="testifyInfo">
           <p>"{props.description}"</p>
        </div>
      </div>
    )
  }