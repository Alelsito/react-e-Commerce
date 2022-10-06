// Context
import { useProductsContext } from '@/context/ProductsContext'

// Component
import Product from '../Product'

// Style
import './Products.scss'

const Products = () => {
  const context = useProductsContext()
  return (
    <section className='products'>
      {
        context.searcherData !== null
          ? context.searcherData.map((product, index) => (
            Object.prototype.hasOwnProperty.call(product, 'image') &&
              <Product key={index} product={product} />
          ))
          : context.data.map((product, index) => (
            Object.prototype.hasOwnProperty.call(product, 'image') &&
              <Product key={index} product={product} />
          ))
      }
    </section>
  )
}

export default Products
