import React from 'react'

// Styles
import './RelatedProducts.scss'

// Components
import Product from '../components/Product'

const RelatedProducts = () => {
  return (
    <section className='related'>
      <article className='related__bar'>
        <div className='related__bar__background'>
          <div className='related__bar__background__component'>
            <span className='related__bar__background__component__text'> Related Products</span>
          </div>
        </div>
      </article>
      <article className='related__products'>
        <Product />
        <Product />
        <Product />
        <Product />
      </article>
    </section>
  )
}

export default RelatedProducts
