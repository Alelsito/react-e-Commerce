import React from 'react'

// React router dom
import { Link } from 'react-router-dom'

// Context
import { useProductsContext } from '../../context/ProductsContext'

// ScrollUp
import scrollUP from '@/utils/scrollUp'

// Styles
import './Product.scss'

// imageNotFound
import imageNotFound from '../../assets/image-not-found.jpg'

const Product = ({ product }) => {
  const context = useProductsContext()

  return (
    <>
      {
        product === undefined
          ? (<></>)
          : (
            <Link to={`/product/${product._id}`} onClick={scrollUP}>
              <article
                className='card'
                onClick={() => {
                  context.setSelectedProduct(product)
                }}
              >
                <div className='card__image'>
                  <img
                    src={
                        Object.prototype.hasOwnProperty.call(product, 'image')
                          ? `${product.image}`
                          : `${imageNotFound}`
                        }
                    alt={product?.product_name}
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
                    <span className='card__info__text--product-name'> {product?.product_name} </span>
                    <span className='card__info__text--product-brand'> Brand: {product?.brand} </span>
                    <span className='card__info__text--product-price'> ${product?.price} </span>
                  </div>
                  <div className='card__info__favorites'>
                    <i className='bi bi-bookmark-heart' />
                  </div>
                </div>
              </article>
            </Link>
            )
      }
    </>
  )
}

export default Product
