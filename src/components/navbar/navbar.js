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
        <a href="#home"><button>Home</button></a>
        <a href="#pastevents"><button>Past Events</button></a>
        <a href="#partners"><button>Partners</button></a>
      
      </div>
      </div>
    </div>
  )
}

export default Navbar
