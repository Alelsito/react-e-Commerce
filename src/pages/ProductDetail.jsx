// React
import { useState } from 'react'

// Components
import ProductDescription from '../components/ProductDescription'
import RelatedProducts from '../components/RelatedProducts'
import Cart from '../components/Cart'

// Style
import './ProductDetail.scss'

const ProductDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const [second, setSecond] = useState(true)

  const styles = {
    description: {
      maxWidth: second ? '60%' : '100%',
      padding: second ? '30px 5% 0px' : '30px 15% 0px'
    },
    cart: {
      display: second ? 'block' : 'none'
    }
  }

  return (
    <main>
      <section className='first'>
        <section className='first__product-description' style={styles.description}>
          <ProductDescription />
        </section>
        <section className='first__cart' style={styles.cart}>
          <Cart />
        </section>
      </section>
      <section className='second'>
        <RelatedProducts />
      </section>
    </main>
  )
}

export default ProductDetail
