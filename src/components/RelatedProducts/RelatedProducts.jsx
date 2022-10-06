// Context
import { useProductsContext } from '@/context/ProductsContext'

// Component
import Product from '../Product'

// Style
import './RelatedProducts.scss'

const RelatedProducts = () => {
  const context = useProductsContext()
  const selectedProduct = context.selectedProduct

  const filterByCategory = context.data.filter((product) => (
    Object.prototype.hasOwnProperty.call(product, 'category') &&
    product.category.includes(selectedProduct.category)
  ))

  return (
    <section className='related'>
      <article className='related__bar'>
        <div className='related__bar__background'>
          <div className='related__bar__background__component'>
            <span className='related__bar__background__component__text'> Related Products</span>
          </div>
        </div>
      </article>
      <article className='related__products'>
        {
          filterByCategory.map((product, index) => (
            (product?._id !== selectedProduct?._id) &&
            index < 16 && <Product key={index} product={product} />
          ))
        }
      </article>
    </section>
  )
}

export default RelatedProducts
