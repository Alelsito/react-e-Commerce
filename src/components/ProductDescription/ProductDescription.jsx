// React router dom
import { Link } from 'react-router-dom'

// Contexts
import { useProductsContext } from '@/context/ProductsContext'
import { useAuthContext } from '@/context/AuthContext'

// Style
import './ProductDescription.scss'

// Image
import imageNotFound from '@/assets/image-not-found.jpg'

const ProductDescription = () => {
  const contextProducts = useProductsContext()
  const contextAuth = useAuthContext()
  const selectedProduct = contextProducts.selectedProduct
  return (
    <article className='structure'>
      <div className='structure__category'>
        <p className='structure__category__text'>
          Category:
          <span className='structure__category__text--modifier'> {selectedProduct?.category} </span>
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
            alt={selectedProduct?._product_name}
            onError={(e) => {
              if (e.target.src !== `${imageNotFound}`) {
                e.target.src = `${imageNotFound}`
              }
            }}
          />
        </div>
        <div className='structure__product__product-detail'>
          <div className='structure__product__product-detail__first'>
            <span className='structure__product__product-detail__first__name'> {selectedProduct?.product_name} </span>
            <span className='structure__product__product-detail__first__brand'> Brand: {selectedProduct?.brand} </span>
          </div>
          <div className='structure__product__product-detail__second'>
            <span className='structure__product__product-detail__second__price'> ${selectedProduct?.price} </span>
          </div>
          <div className='structure__product__product-detail__divider' />
          <div className='structure__product__product-detail__third'>
            <div className='structure__product__product-detail__third__description'>
              <span className='structure__product__product-detail__third__text'> Description </span>
            </div>
            <span className='structure__product__product-detail__third__text--modifier'>
              {selectedProduct?.description}
            </span>
          </div>
          <div className='structure__product__product-detail__fourth'>
            {
              contextAuth.isAuth === false
                ? (
                  <>
                    <button type='submit' className='structure__product__product-detail__fourth__button-purchase--not-able'>
                      <i className='bi bi-bag' />
                      <span className='structure__product__product-detail__fourth__button-purchase__text'> Purchase </span>
                    </button>
                    <Link to='/login'>
                      <button type='submit' className='structure__product__product-detail__fourth__button-login'>
                        <span className='structure__product__product-detail__fourth__button-login__text'> Login for purchase! </span>
                      </button>
                    </Link>
                  </>
                  )
                : (
                  <button type='submit' className='structure__product__product-detail__fourth__button-purchase'>
                    <i className='bi bi-bag' />
                    <span className='structure__product__product-detail__fourth__button-purchase__text'> Purchase </span>
                  </button>
                  )
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductDescription
