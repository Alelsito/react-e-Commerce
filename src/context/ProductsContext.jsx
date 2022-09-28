// Create context
import { createContext, useContext, useEffect, useState } from 'react'
import axiosDataGet from '../services/axiosDataGet'

// #1. Creaction del contexto vacio

const ProductsContext = createContext()

// #2. Creación del Proveedor del Contexto
// Es decir, maneja de donde de obtiene y como se pasa la información

function ProductsProvider (props) {
  const [data, setData] = useState([])
  const [url, setUrl] = useState(['https://ecomerce-master.herokuapp.com/api/v1/item'])
  const [selectedProduct, setSelectedProduct] = useState({})

  // Llamada a la API

  useEffect(() => {
    const asyncData = async () => {
      const res = await axiosDataGet(url)
      setData(res)
    }
    asyncData()
  }, [url])

  // Values que necesito
  const value = {
    data,
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
