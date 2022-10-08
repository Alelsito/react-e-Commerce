import { createContext, useContext, useState } from 'react'

// ProductsContext
import { useProductsContext } from './ProductsContext'

// Helpers
import replaceNoNumber from '../helpers/replaceNoNumber'

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
    setTotal(total + replaceNoNumber(selectedProduct.price))
  }

  const deleteItem = (index) => {
    const itemDeleted = cartItems.splice(index, 1)
    setTotal(total - replaceNoNumber(itemDeleted[0].price))
    setCartItems([...cartItems])
  }

  const value = {
    cart,
    cartItems,
    total,
    cartIsTrue,
    addItem,
    deleteItem
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
