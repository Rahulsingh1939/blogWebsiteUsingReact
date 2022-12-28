import React from 'react'
import Logo from '../img/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">Links</div>
      </div>
    </div>
  )
}
