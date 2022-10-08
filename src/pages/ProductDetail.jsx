// Components
import ProductDescription from '../components/ProductDescription'
import RelatedProducts from '../components/RelatedProducts'
import Cart from '../components/Cart'

// Style
import './ProductDetail.scss'
import { useCartContext } from '../context/CartContext'

const ProductDetail = () => {
  const contextCart = useCartContext()

  const styles = {
    description: {
      maxWidth: contextCart.cart ? '60%' : '100%',
      padding: contextCart.cart ? '30px 5% 0px' : '30px 15% 0px'
    },
    cart: {
      display: contextCart.cart ? 'block' : 'none'
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
