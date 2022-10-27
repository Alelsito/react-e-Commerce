// Context
import { useProductsContext } from '@/context/ProductsContext'

// Component
import Product from '../Product'

// Component Common
import Loading from '../Common/Loading'

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
          : context.data !== null && context.data.length === 0
            ? <Loading />
            : context.data.map((product, index) => (
              Object.prototype.hasOwnProperty.call(product, 'image') &&
                <Product key={index} product={product} />
            ))
      }
    </section>
  )
}

export default Products
