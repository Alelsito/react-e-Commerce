import React from 'react'

// Style
import './Products.scss'

// Components
import Product from '../Product'
import { useProductsContext } from '../../context/ProductsContext'

const Products = () => {
  const context = useProductsContext()
  return (
    <section className='products'>
      {
        context.data.map((product, index) => (
          index < 100 && <Product key={index} product={product} />)
        )
      }
    </section>
  )
}

export default Products
