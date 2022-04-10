import React from 'react'
import './Navbar.css'
// Importing cartContext
import { CartContext } from '../../Context/Cart/CartContext'
function Navbar() {
  const { cartItems, showHiddenCart } = React.useContext(CartContext)
  return (
    <nav>
      <div className="nav__left">Bubble</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHiddenCart}
          ></i>
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
