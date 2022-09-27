// Context
import { ProductsProvider } from './context/ProductsContext'

// Layouts
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

// Pages
import Router from './routes/Router'

function App () {
  return (
    <ProductsProvider>
      <Navbar />
      <Router />
      <Footer />
    </ProductsProvider>
  )
}

export default App
