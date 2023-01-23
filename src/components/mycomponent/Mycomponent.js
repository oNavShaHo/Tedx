import React from 'react';
import '../mycomponent/Mycomponent.css'
function Mycomponent({heading,content,position,image,button,posi}) {
  return (

    <div class="container">
      <div class="container1">
      <img src={image} alt=""  padding="10px" style={{float: position === 'right' ? 'right' : 'left'}} />
       <h2>{heading}</h2>
       <br/>
       
       <p>{content}</p>
       </div>
       <div class="container2">
      <button style={{float: posi === 'right' ? 'right' : 'left'}} class="my-button">{button}</button>
      </div>

    </div>
  )
}
export default Mycomponent;
