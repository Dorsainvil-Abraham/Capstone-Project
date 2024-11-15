import React from 'react'
import GreekSalad from '../Images/PictureFood01.jpg'
import Bruschetta from '../Images/PictureFood03.jpg'
import LemonDessert from '../Images/LemonDessert.jpg'
import './Menu.css'

function Menu() {
  return (
    <main>
      <section>
        <div className="specials">
          <h1>This Week Specials!</h1>
          <button>Online Menu</button>
        </div>
      </section>
      <section>
        <div className="card">
          <Order image={GreekSalad}
                 name='Greek Salad'
                 price= '$12.99'
                 description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
          />
           <Order image={Bruschetta}
                 name='Bruschetta'
                 price= '$5.99'
                 description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil'
            />
             <Order image={LemonDessert}
                 name='Lemon Dessert'
                 price= '$5.00'
                 description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
        </div>
      </section>
    </main>
  )
}

function Order (props) {
  return(
    <div className="order">
      <img src={props.image} alt={props.name} />
      <div className="info">
        <div className="info1">
          <h2>{props.name}</h2>
          <h2>{props.price}</h2>
        </div>
        <div className="info2">
          <p>{props.description}</p>
          <p>Order a delivery</p>
      </div>
      </div>
    </div>
  )
}

export default Menu