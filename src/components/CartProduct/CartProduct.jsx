// React
import { useState, useEffect } from 'react'

// Context
import { useCartContext } from '@/context/CartContext'

// Image
import imageNotFound from '@/assets/image-not-found.jpg'

const CartProduct = ({ index, product }) => {
  const contextCart = useCartContext()
  const duplicatedCartItems = contextCart.duplicatedCartItems
  const cartItems = contextCart.cartItems

  const [quantity, setQuantity] = useState(1)

  const plusQuantity = () => {
    setQuantity(quantity + 1)
  }

  const minusQuantity = () => {
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    const duplicated = duplicatedCartItems.filter(p => (
      product._id === p._id
    ))
    const item = cartItems.filter(p => (
      product._id === p._id
    ))
    setQuantity(item.length + duplicated.length)
  }, [cartItems, duplicatedCartItems])

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
              <i
                className='fa-solid fa-minus'
                onClick={() => {
                  if (quantity > 1) {
                    minusQuantity()
                    contextCart.deleteQuantityItem(product._id)
                  } else if (quantity === 1) {
                    minusQuantity()
                    contextCart.deleteItem(index)
                  }
                }}
              />
            </div>
            <p className='container__products__product__second__quantity__number'> {quantity} </p>
            <div className='container__products__product__second__quantity__plus'>
              <i
                className='fa-solid fa-plus'
                onClick={() => {
                  plusQuantity()
                  contextCart.addItem(product)
                }}
              />
            </div>

          </div>
        </div>
        <div className='container__products__product__third'>
          <i
            className='fa-solid fa-xmark'
            onClick={() => {
              contextCart.deleteItem(index, product)
            }}
          />
          <p className='container__products__product__third__total'> ${product.price * quantity} </p>
        </div>
      </div>
      <div className='container__products__divider' />
    </>

  )
}

export default CartProduct
