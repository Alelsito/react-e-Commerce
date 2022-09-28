import React from 'react'

// Styles
import './Product.scss'

// Logo
import imageNotFound from '../../assets/image-not-found.jpg'

const Product = ({ product }) => {
  return (
    <article className='card'>
      <div className='card__image'>
        <img
          src={
            Object.prototype.hasOwnProperty.call(product, 'image')
              ? `${product.image}`
              : Object.prototype.hasOwnProperty.call(product, 'images')
                ? `${product.images}`
                : `${imageNotFound}`
          }
          alt={product.product_name}
          className='card__image__product'
          onError={(e) => {
            if (e.target.src !== `${imageNotFound}`) {
              e.target.src = `${imageNotFound}`
            }
          }}
        />
        {
          Object.prototype.hasOwnProperty.call(product, 'category')
            ? (
              <div className='card__image__category'>
                <span className='card__image__category__text'> {product.category} </span>
              </div>
              )
            : <></>
        }
      </div>
      <div className='card__info'>
        <div className='card__info__text'>
          <span className='card__info__text--product-name'> {product.product_name} </span>
          <span className='card__info__text--product-brand'> Brand: {product.brand} </span>
          <span className='card__info__text--product-price'> ${product.price} </span>
        </div>
        <div className='card__info__favorites'>
          <i className='bi bi-bookmark-heart' />
        </div>
      </div>
    </article>
  )
}

export default Product
