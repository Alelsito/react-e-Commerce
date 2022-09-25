import React from 'react'

// Styles
import './ProductDescription.scss'

const ProductDescription = () => {
  return (
    <section className='structure'>
      <div className='structure__category'>
        <p className='structure__category__text'>
          Category:
          <span className='structure__category__text--modifier'> Handbag </span>
        </p>
      </div>
      <div className='structure__product'>
        <div className='structure__product__image'>
          <img src='https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg' alt='' />
        </div>
        <div className='structure__product__product-detail'>
          <div className='structure__product__product-detail__first'>
            <span className='structure__product__product-detail__first__name'> Product-Name </span>
            <span className='structure__product__product-detail__first__brand'> Brand: </span>
          </div>
          <div className='structure__product__product-detail__second'>
            <span className='structure__product__product-detail__second__price'> $54.69 </span>
          </div>
          <div className='structure__product__product-detail__divider' />
          <div className='structure__product__product-detail__third'>
            <div className='structure__product__product-detail__third__description'>
              <span className='structure__product__product-detail__third__text'> Description </span>
            </div>
            <span className='structure__product__product-detail__third__text--modifier'>
              The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design
            </span>
          </div>
          <div className='structure__product__product-detail__fourth'>
            <button type='submit' className='structure__product__product-detail__fourth__button'>
              <i className='bi bi-bag' />
              <span className='structure__product__product-detail__fourth__button__text'> Purchase </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDescription
