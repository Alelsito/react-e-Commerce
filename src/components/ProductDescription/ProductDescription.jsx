import React from 'react'

// Context
import { useProductsContext } from '../../context/ProductsContext'

// Styles
import './ProductDescription.scss'

// imageNotFound
import imageNotFound from '../../assets/image-not-found.jpg'

const ProductDescription = () => {
  const context = useProductsContext()
  const selectedProduct = context.selectedProduct
  return (
    <section className='structure'>
      <div className='structure__category'>
        <p className='structure__category__text'>
          Category:
          <span className='structure__category__text--modifier'> {selectedProduct.category} </span>
        </p>
      </div>
      <div className='structure__product'>
        <div className='structure__product__image'>
          <img
            src={
                Object.prototype.hasOwnProperty.call(selectedProduct, 'image')
                  ? `${selectedProduct.image}`
                  : Object.prototype.hasOwnProperty.call(selectedProduct, 'images')
                    ? `${selectedProduct.images}`
                    : `${imageNotFound}`
                }
            alt=''
          />
        </div>
        <div className='structure__product__product-detail'>
          <div className='structure__product__product-detail__first'>
            <span className='structure__product__product-detail__first__name'> {selectedProduct.product_name} </span>
            <span className='structure__product__product-detail__first__brand'> Brand: {selectedProduct.brand} </span>
          </div>
          <div className='structure__product__product-detail__second'>
            <span className='structure__product__product-detail__second__price'> ${selectedProduct.price} </span>
          </div>
          <div className='structure__product__product-detail__divider' />
          <div className='structure__product__product-detail__third'>
            <div className='structure__product__product-detail__third__description'>
              <span className='structure__product__product-detail__third__text'> Description </span>
            </div>
            <span className='structure__product__product-detail__third__text--modifier'>
              {selectedProduct.description}
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
