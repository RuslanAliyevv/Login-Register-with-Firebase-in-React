import React from 'react'
import { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'

export default function Signin() {
    const headerStyle = {
        fontSize: '24px', // Adjust font size as needed
        marginBottom: '20px', // Adjust margin as needed
        
      };
    const inputStyle = {
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '200px',
      };
      
      const buttonStyle = {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
      };
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const signin = (e) =>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>{
        console.log(userCredential)
      }).catch((error)=>{
        console.log(error)
      })
    }
  return (
    <div>
        <form style={{textAlign:'center'}} onSubmit={signin} action="">
            <h1 style={headerStyle}>Log In to your Account</h1>
            <input  style={inputStyle} type="email" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input  style={inputStyle} type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button style={buttonStyle}>LOG IN</button>
        </form>
    </div>
  )
}
