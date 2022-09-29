// React
import React, { useEffect } from 'react'

// Components
import ProductDescription from '../components/ProductDescription'
import RelatedProducts from '../components/RelatedProducts'

const ProductDetail = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <ProductDescription />
      <RelatedProducts />
    </>
  )
}

export default ProductDetail
