import React from 'react'
import Logo from '../img/logo.png'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="like" />
      <span className="footer-text">
        Made with ♥ and <b>React JS.</b>
      </span> 
    </footer>
  )
}

export default Footer
