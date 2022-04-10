import { useReducer } from 'react'
import { CartContext } from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './CartActions'

export const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  }
  const [state, dispatch] = useReducer(CartReducer, initialState)

  // Functionalities
  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    })
  }

  const showHiddenCart = () => {
    dispatch({
      type: SHOW_HIDE_CART,
    })
  }
  const removeCartItem = (id) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    })
  }
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        showHiddenCart,
        addToCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
