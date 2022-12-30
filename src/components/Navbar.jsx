import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=tech">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>Rahul</span>
          <span>Logout</span>
          <span className="write">
          <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
