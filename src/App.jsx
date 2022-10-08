// Context
import { AuthProvider } from './context/AuthContext'
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'

// Router {useLocation}
import { useLocation } from 'react-router-dom'

// Layouts
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

// Pages
import Router from './routes/Router'

function App () {
  const location = useLocation()
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <Navbar />
          <Router />
          {
            location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/register/product'
              ? <></>
              : <Footer />
          }
        </CartProvider>

      </ProductsProvider>
    </AuthProvider>
  )
}

export default App
