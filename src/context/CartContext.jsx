// React
import { createContext, useContext, useState } from 'react'

// Helpers
import replaceNoNumber from '../helpers/replaceNoNumber'

const CartContext = createContext()

function CartProvider (props) {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [duplicatedCartItems, setDuplicatedCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const cartIsTrue = () => {
    setCart(true)
  }

  const cartIsFalse = () => {
    setCart(false)
  }

  const addItem = (product) => {
    const filter = cartItems.filter(p => (
      product._id === p._id
    ))
    if (filter.length > 0) {
      setDuplicatedCartItems([...duplicatedCartItems, product])
      setTotal(total + replaceNoNumber(product.price))
    } else if (filter.length === 0) {
      setCartItems([...cartItems, product])
      setTotal(total + replaceNoNumber(product.price))
    }
  }

  const deleteItem = (index, product) => {
    const itemDeleted = cartItems.splice(index, 1)
    let totalMoney = itemDeleted[0].price
    setCartItems([...cartItems])

    const duplicatedItems = duplicatedCartItems.filter(p => (
      product._id === p._id
    ))
    duplicatedItems.forEach(p => (
      totalMoney += replaceNoNumber(p.price)
    ))
    const noDuplicatedItems = duplicatedCartItems.filter(p => (
      product._id !== p._id
    ))

    setTotal(total - totalMoney)
    setDuplicatedCartItems(noDuplicatedItems)
  }

  const deleteQuantityItem = (id) => {
    const specificProduct = duplicatedCartItems.find(p => p.id === id)
    const specificProductIndex = duplicatedCartItems.indexOf(specificProduct)
    const itemDeleted = duplicatedCartItems.splice(specificProductIndex, 1)
    setTotal(total - replaceNoNumber(itemDeleted[0].price))
  }

  const value = {
    cart,
    cartItems,
    duplicatedCartItems,
    setDuplicatedCartItems,
    total,
    cartIsTrue,
    cartIsFalse,
    addItem,
    deleteItem,
    deleteQuantityItem
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
