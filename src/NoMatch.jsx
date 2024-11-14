import React from 'react'
import { FaDigg } from "react-icons/fa";


const styl = {
    color: '#495E57',
    textAlign: 'center',
    padding: '30px',
    marginBottom: '20px'
}
const stylin = {
    padding: '20px',
    backgroundColor: '#495E57',
    marginBottom: '20px'
}


function NoMatch() {
  return (
    <>
        <div style={stylin}>
           
        </div>
        <div style={styl}>
            <FaDigg />
           <FaCheckCircle style={{fontSize: '50px'}}/>
           <h1>Page Under Contruction.</h1>
        </div>
    </>
  )
}

export default NoMatch