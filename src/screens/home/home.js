import React from 'react'
import h1 from '../../images/tedh1.png'
import '../home/home.css'
import Navbar from '../../components/navbar/navbar'
function home() {
  return (
    <div>
        <div id="navbar">
 <Navbar/>
</div>
<div id="image">
  <img  src={h1} alt="h1"  />
</div>

    </div>
  )
}

export default home