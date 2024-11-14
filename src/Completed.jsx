import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const style = {
    color: '#495E57',
    textAlign: 'center',
    padding: '30px',
    marginBottom: '20px'
}
const styling = {
    padding: '20px',
    backgroundColor: '#495E57',
    marginBottom: '20px'
}
function Completed() {
  return (
    <>
        <div style={styling}>
            {/*<h3>Reservation</h3>*/}
        </div>
        <div style={style}>
           <FaCheckCircle style={{fontSize: '50px'}}/>
           <h1>Your reservation has been confirmed succesfully.</h1>
           <br />
           <p>You will receive an email with all details</p>
        </div>
    </>
  )
}

export default Completed