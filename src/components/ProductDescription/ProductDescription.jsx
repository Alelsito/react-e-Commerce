// React router dom
import { Link } from 'react-router-dom'

// Contexts
import { useProductsContext } from '@/context/ProductsContext'
import { useAuthContext } from '@/context/AuthContext'
import { useCartContext } from '@/context/CartContext'

// Style
import './ProductDescription.scss'

// Image
import imageNotFound from '@/assets/image-not-found.jpg'

const ProductDescription = () => {
  const contextProducts = useProductsContext()
  const selectedProduct = contextProducts.selectedProduct
  const contextAuth = useAuthContext()
  const contextCart = useCartContext()
  const cartItems = contextCart.cartItems
  const handleCartTrue = contextCart.cartIsTrue
  const addItem = contextCart.addItem
  const cart = contextCart.cart

  const styles = {
    buttonPurchase: {
      minWidth: cart
        ? '100%'
        : cartItems.length !== 0
          ? '60%'
          : '100%'
    },
    buttonCart: {
      display: cart ? 'none' : 'flex'
    }
  }

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
                    <button className='structure__product__product-detail__fourth__button-purchase--not-able'>
                      <i className='bi bi-bag' />
                      <span className='structure__product__product-detail__fourth__button-purchase__text'> Purchase </span>
                    </button>
                    <Link to='/login'>
                      <button className='structure__product__product-detail__fourth__button-login'>
                        <span className='structure__product__product-detail__fourth__button-login__text'> Login for purchase! </span>
                      </button>
                    </Link>
                  </>
                  )
                : (
                  <>
                    <button
                      className='structure__product__product-detail__fourth__button-purchase'
                      style={styles.buttonPurchase}
                      onClick={() => {
                        handleCartTrue()
                        addItem(selectedProduct)
                      }}
                    >
                      <i className='bi bi-bag' />
                      <span className='structure__product__product-detail__fourth__button-purchase__text'> Purchase </span>
                    </button>
                    {
                      cartItems.length !== 0 &&
                        (
                          <button
                            className='structure__product__product-detail__fourth__button-cart'
                            style={styles.buttonCart}
                            onClick={handleCartTrue}
                          >
                            <i className='fa-solid fa-cart-shopping' />
                            <span className='structure__product__product-detail__fourth__button-purchase__text'> Show </span>
                          </button>
                        )
                    }

                  </>
                  )
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductDescription
