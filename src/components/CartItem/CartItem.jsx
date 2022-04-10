import React from 'react'
import { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../Context/Cart/CartContext'
import formatCurrency from 'format-currency'

const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(CartContext)
  let opts = { format: '%s%v', symbol: 'Rwf ' }
  return (
    <li className="CartItem__item">
      <img src={item.image} />
      <div>
        {item.name} {formatCurrency(` ${item.price}`, opts)}
      </div>
      <button
        className="CartItem__button"
        onClick={() => removeCartItem(item.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default CartItem
