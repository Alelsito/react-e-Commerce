import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

function CartProvider (props) {
  const [cart, setCart] = useState(false)

  const cartIsTrue = () => {
    setCart(true)
  }

  const value = {
    cart,
    cartIsTrue
  }

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}

export {
  CartProvider,
  useCartContext
}
