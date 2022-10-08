import { createContext, useContext, useState } from 'react'

// ProductsContext
import { useProductsContext } from './ProductsContext'

const CartContext = createContext()

function CartProvider (props) {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const contextProducts = useProductsContext()
  const selectedProduct = contextProducts.selectedProduct

  const cartIsTrue = () => {
    setCart(true)
  }

  const addItem = () => {
    setCartItems([...cartItems, selectedProduct])
  }

  const value = {
    cart,
    cartItems,
    cartIsTrue,
    addItem
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
