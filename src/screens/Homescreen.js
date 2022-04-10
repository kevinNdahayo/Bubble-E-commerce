import React from 'react'
import { products } from '../data'
import ProductCard from '../components/ProductCard/ProductCard'
import './Homescreen.css'

function Homescreen() {
  return (
    <div className="products__wrapper">
      {products.map((product) => {
        return <ProductCard key={product.div} product={product} />
      })}
    </div>
  )
}

export default Homescreen
