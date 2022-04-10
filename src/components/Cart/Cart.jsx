import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Context/Cart/CartContext'
import formatCurrency from 'format-currency'
import CartItem from './../CartItem/CartItem'

export const Cart = () => {
  const { showCart, cartItems, showHiddenCart } = useContext(CartContext)
  let opts = { format: '%s%v', symbol: 'Rwf ' }

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: 'right' }}>
            <i
              style={{ cursor: 'pointer' }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHiddenCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts,
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
