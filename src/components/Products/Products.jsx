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
        context.searcherData !== null
          ? context.searcherData.map((product, index) => (
            Object.prototype.hasOwnProperty.call(product, 'image') &&
              <Product key={index} product={product} />
          ))
          : context.data.map((product, index) => (
            Object.prototype.hasOwnProperty.call(product, 'image') &&
              index <= 200 && <Product key={index} product={product} />
          ))
      }
    </section>
  )
}

export default Products
