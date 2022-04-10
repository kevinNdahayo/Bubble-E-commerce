import React from 'react'
import { Cart } from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Homescreen from './screens/Homescreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Homescreen />
    </div>
  )
}

export default App
