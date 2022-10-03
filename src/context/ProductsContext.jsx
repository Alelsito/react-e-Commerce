import { createContext, useContext, useEffect, useState } from 'react'
import axiosDataGet from '../services/axiosDataGet'

// import { useLocation } from 'react-router-dom'

const ProductsContext = createContext()

function ProductsProvider (props) {
  const [data, setData] = useState([])
  const [searcherData, setSearcherData] = useState(null)
  const [url, setUrl] = useState(['https://ecomerce-master.herokuapp.com/api/v1/item'])
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    const asyncData = async () => {
      const res = await axiosDataGet(url)
      setData(res)
    }
    asyncData()
  }, [url])

  const value = {
    data,
    searcherData,
    setSearcherData,
    url,
    setUrl,
    selectedProduct,
    setSelectedProduct
  }

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  )
}

// #3. Consumidor del contexto
// Brinda acceso a la data de los componentes

const useProductsContext = () => {
  const context = useContext(ProductsContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer

export {
  ProductsProvider,
  useProductsContext
}

// USO DE CONTEXT

// #5. Ahora debemos de ir a un componente superior
// y envolver a los componentes que necesitan la información del contexto (props.children)
