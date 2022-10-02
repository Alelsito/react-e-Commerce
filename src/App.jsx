// Context
import { ProductsProvider } from './context/ProductsContext'

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
    <ProductsProvider>
      <Navbar />
      <Router />
      {
        location.pathname === '/login' || location.pathname === '/signup'
          ? <></>
          : <Footer />
      }
    </ProductsProvider>
  )
}

export default App
