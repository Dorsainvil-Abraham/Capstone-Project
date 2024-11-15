import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Reservations.css'

function Contact() {
    const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');


  const handlingName = (event) => {
    setName(event.target.value)
  }
  const handlingEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlingDate = (event) => {
    setDate(event.target.value)
  }

  const handlingTime = (event) => {
    setTime(event.target.value)
  }
  const handlingGuest = (event) => {
    setGuest(event.target.value)
  }

  const handlingOcassion = (event) => {
    setOccasion(event.target.value)
  }

  const handlingMessage = (event) => {
    setMessage(event.target.value)
  }


  const handlingSubmit = (event) => {
        navigate('/completed')
  }
  //const handlingSubmit = (event) => {
  // event.preventDefault();
    //alert('Form has been Submitted');
  //}


  return (
    <div>
      <div className="reservation">
         <h1>Table Reservation</h1>
      </div>

      <div className='form'>
        <form onSubmit={handlingSubmit}>

            <label htmlFor="name" >User Name</label><br />
            <input type="text" value={name} onChange={handlingName} placeholder='Enter Your Name' required/><br />

            <label htmlFor="email">Email</label><br />
            <input type="email" value={email} onChange={handlingEmail} placeholder='Enter Your Email' required/><br />


            <label htmlFor="date">Date</label><br />
            <input type="date" value={date} onChange={handlingDate} required/><br />

            <label htmlFor="time">Choose time</label><br />
            <select name='time' id="time" value={time} onChange={handlingTime} required>
               <option>17:00</option>
               <option>18:00</option>
               <option>19:00</option>
               <option>20:00</option>
               <option>21:00</option>
               <option>22:00</option>
            </select><br />


            <label htmlFor="guest">Number of guests</label><br />
            <input type="number"value={guest} onChange={handlingGuest} min='1' max='10' required/><br />

            <label htmlFor="occasion">Ocassion</label><br />
            <select name="occasion" id="occasion" value={occasion} onChange={handlingOcassion} required>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Meeting">Meeting</option>
            </select><br />

            <label htmlFor="User_message">Message</label><br />
            <textarea name="User_message" id="User_message" placeholder='Write Something' value={message} onChange={handlingMessage} style={{height: '150px'}} required></textarea><br />

            <button type='submit'>Make Your Reservation</button>
      </form>
      <br />
      </div>

    </div>
  )
}

export default Contact