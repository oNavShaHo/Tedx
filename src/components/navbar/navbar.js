import React from 'react'
import logomainvit from '../../images/logomainvit.jpg'
import '../navbar/navbar.css'

function Navbar() {
  return (
    <div>
      <div id="logo">
        <img  src={logomainvit} alt="logo" />
      </div>
      <div id="navbar">
      <div id="links">
        <a href="#home">Home</a>
        <a href="#pastevents">Past Events</a>
        <a href="#partners">Partners</a>
        <a href="#about">About</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
