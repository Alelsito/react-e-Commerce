// React
import { createContext, useContext, useState, useEffect } from 'react'

// Helpers
import replaceNoNumber from '../helpers/replaceNoNumber'

const CartContext = createContext()

function CartProvider (props) {
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [duplicatedCartItems, setDuplicatedCartItems] = useState([])
  const [purchasedItems, setPurchasedItems] = useState([])
  const [total, setTotal] = useState(0)

  const cartIsTrue = () => {
    setCart(true)
  }

  const cartIsFalse = () => {
    setCart(false)
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      cartIsFalse()
    }
  }, [cartItems])

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

    if (product !== undefined) {
      const duplicatedItems = duplicatedCartItems.filter(p => (
        product._id === p._id
      ))
      duplicatedItems.forEach(p => (
        totalMoney += replaceNoNumber(p.price)
      ))
      const noDuplicatedItems = duplicatedCartItems.filter(p => (
        product._id !== p._id
      ))
      setDuplicatedCartItems(noDuplicatedItems)
    }

    setTotal(total - totalMoney)
  }

  const deleteQuantityItem = (id) => {
    const specificProduct = duplicatedCartItems.find(p => p._id === id)
    const specificProductIndex = duplicatedCartItems.indexOf(specificProduct)
    const itemDeleted = duplicatedCartItems.splice(specificProductIndex, 1)
    setTotal(total - replaceNoNumber(itemDeleted[0].price))
  }

  const placeOrder = () => {
    const purchasedItemsArray = cartItems.concat(duplicatedCartItems)
    purchasedItemsArray.sort((a, b) => a.product_name.localeCompare(b.product_name))
    setPurchasedItems([...purchasedItems, ...purchasedItemsArray])

    setCartItems([])
    setDuplicatedCartItems([])
    setTotal(0)
  }

  useEffect(() => {
    const getPurchasedItemsFromLocalStorage = window.localStorage.getItem('purchasedItems')
    if (purchasedItems.length !== 0) {
      const stringifyPurchasedItems = purchasedItems.map(p => {
        return JSON.stringify(p)
      })
      window.localStorage.setItem('purchasedItems', stringifyPurchasedItems)
    } else if (purchasedItems.length === 0 && getPurchasedItemsFromLocalStorage !== null) {
      const preparedPurchasedItemsForSplit = getPurchasedItemsFromLocalStorage.replace(/},/g, '}splitRightHere')
      const splitPurchasedItems = preparedPurchasedItemsForSplit.split('splitRightHere')
      const parseLocalStoragePurchasedItems = splitPurchasedItems.map(p => {
        return JSON.parse(p)
      })
      setPurchasedItems([...purchasedItems, ...parseLocalStoragePurchasedItems])
    }
  }, [purchasedItems])

  const value = {
    cart,
    cartItems,
    duplicatedCartItems,
    total,
    cartIsTrue,
    cartIsFalse,
    addItem,
    deleteItem,
    deleteQuantityItem,
    placeOrder
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
