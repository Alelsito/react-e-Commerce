import React from 'react'

// Styles
import './Product.scss'

const Product = () => {
  return (
    <article className='card'>
      <div className='card__image'>
        <img src='https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg' alt='' className='card__image__product' />
        <div className='card__image__category'>
          <span className='card__image__category__text'> Kids </span>
        </div>
      </div>
      <div className='card__info'>
        <div className='card__info__text'>
          <span className='card__info__text--product-name'> Awesome Granite Bacon </span>
          <span className='card__info__text--product-brand'> Brand: Osinski - Prosacco </span>
          <span className='card__info__text--product-price'> $962 </span>
        </div>
        <div className='card__info__favorites'>
          <i className='bi bi-bookmark-heart' />
        </div>
      </div>
    </article>
  )
}

export default Product
