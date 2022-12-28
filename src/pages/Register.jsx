import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <input type="password" placeholder='confirm password' />
        <button >Register</button>
         <p>This is an Error.</p>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form> 
    </div>
  )
}

export default Register
