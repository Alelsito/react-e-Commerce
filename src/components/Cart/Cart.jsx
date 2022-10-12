// React Router Dom
import { Link } from 'react-router-dom'

// Context
import { useCartContext } from '@/context/CartContext'

// Component
import CartProduct from '../CartProduct'

// Style
import './Cart.scss'

const Cart = () => {
  const contextCart = useCartContext()
  const handleCartFalse = contextCart.cartIsFalse
  const handlePlaceOrder = contextCart.placeOrder

  return (
    <div className='container'>
      <div className='container__close'>
        <i className='fa-solid fa-arrow-left' onClick={handleCartFalse} />
        <p> Close </p>
      </div>
      <div className='container__products'>
        {
          contextCart.cartItems.length !== 0
            ? contextCart.cartItems.map((product, index) => (
              <CartProduct key={index} index={index} product={product} />
            ))
            : (<></>)
        }
      </div>
      <div className='container__sticky'>
        <div className='container__total'>
          <p className='container__total__text'> Total </p>
          <p className='container__total__number'> ${contextCart.total} </p>
        </div>
        <button className='container__order' onClick={handlePlaceOrder}> Place Order </button>
      </div>
      <div className='container__continue-shopping'>
        <Link to='/'>
          <p className='container__continue-shopping__link'> Continue Shopping </p>
        </Link>
      </div>
    </div>
  )
}

export default Cart
