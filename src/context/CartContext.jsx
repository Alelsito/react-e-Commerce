import { createContext, useContext, useState } from 'react'

// ProductsContext
import { useProductsContext } from './ProductsContext'

const CartContext = createContext()

function CartProvider (props) {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const contextProducts = useProductsContext()
  const selectedProduct = contextProducts.selectedProduct

  const cartIsTrue = () => {
    setCart(true)
  }

  const addItem = () => {
    setCartItems([...cartItems, selectedProduct])
    setTotal(total + selectedProduct.price)
  }

  const value = {
    cart,
    cartItems,
    total,
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
