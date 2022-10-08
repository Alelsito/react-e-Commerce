import React from 'react'

// Image
import imageNotFound from '@/assets/image-not-found.jpg'

const CartProduct = ({ product }) => {
  return (
    <>
      <div className='container__products__product'>
        <div className='container__products__product__first'>
          <img
            src={
                Object.prototype.hasOwnProperty.call(product, 'image')
                  ? `${product.image}`
                  : `${imageNotFound}`
                }
            alt={product.product_name}
            onError={(e) => {
              if (e.target.src !== `${imageNotFound}`) {
                e.target.src = `${imageNotFound}`
              }
            }}
          />
        </div>
        <div className='container__products__product__second'>
          <p className='container__products__product__second__product-name'> {product.product_name} </p>
          <p className='container__products__product__second__category'> Category: {product.category} </p>
          <div className='container__products__product__second__quantity'>
            <div className='container__products__product__second__quantity__minus'>
              <i className='fa-solid fa-minus' />
            </div>
            <p className='container__products__product__second__quantity__number'> 1 </p>
            <div className='container__products__product__second__quantity__plus'>
              <i className='fa-solid fa-plus' />
            </div>
          </div>
        </div>
        <div className='container__products__product__third'>
          <i className='fa-solid fa-xmark' />
          <p className='container__products__product__third__total'> ${product.price} </p>
        </div>
      </div>
      <div className='container__products__divider' />
    </>

  )
}

export default CartProduct
