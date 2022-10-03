import { createContext, useContext, useEffect, useState } from 'react'
import { getAllItems } from '../services/axiosMethods'

const ProductsContext = createContext()

function ProductsProvider (props) {
  const [data, setData] = useState([])
  const [searcherData, setSearcherData] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    const asyncData = async () => {
      const res = await getAllItems()
      setData(res)
    }
    asyncData()
  }, [])

  const value = {
    data,
    searcherData,
    setSearcherData,
    selectedProduct,
    setSelectedProduct
  }

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => {
  const context = useContext(ProductsContext)
  return context
}

export {
  ProductsProvider,
  useProductsContext
}
