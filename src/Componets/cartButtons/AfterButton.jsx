import React from 'react'
import './buttons.css'
const AfterButton = () => {
  return (
    <div className="after-cart">
    <button className="cart-counter-button" >
       -
    </button>
    <div className="cart-count"></div>
    <button className="cart-counter-button" >
       +
    </button>
 </div>
  )
}

export default AfterButton
