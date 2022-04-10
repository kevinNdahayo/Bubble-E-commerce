import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { CartState } from './Context/Cart/CartState'

ReactDOM.render(
  <CartState>
    <Router>
      <App />
    </Router>
  </CartState>,
  document.getElementById('root'),
)
