import React from 'react'

// Component
import CartProduct from '../CartProduct'

// Style
import './Cart.scss'

const Cart = () => {
  return (
    <div className='container'>
      <div className='container__close'>
        <i className='fa-solid fa-arrow-left' />
        <p> Close </p>
      </div>
      <div className='container__products'>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className='container__sticky'>
        <div className='container__total'>
          <p className='container__total__text'> Total </p>
          <p className='container__total__number'> $112 </p>
        </div>
        <button className='container__order'> Place Order </button>
      </div>
      <div className='container__continue-shopping'>
        <p className='container__continue-shopping__link'> Continue Shopping </p>
      </div>
    </div>
  )
}

export default Cart
