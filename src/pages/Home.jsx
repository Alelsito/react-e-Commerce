import React from 'react'

// Layouts
import Navbar from '../layouts/Navbar'
import About from '../layouts/About'

// Components
import Products from '../components/Products'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Products />
      <Footer />
    </>
  )
}

export default Home
