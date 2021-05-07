import React from 'react'

import cart from "../Images/cart.jpg"


function Header(props) {
  console.warn("Header", props.data)  
  console.warn("Length--->>>", props.data.length) 
    return (
        <div>
<div>
     <span className="cart-count">{props.data.length}</span>   
  <div className="cart-image">
 
    <img className="cart-pic" src={cart} alt="shopping cart"/>
  
  </div>
     
</div>
</div>
    )
}

export default Header
              