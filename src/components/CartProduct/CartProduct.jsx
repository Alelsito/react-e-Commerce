import React from 'react'

const CartProduct = () => {
  return (
    <>
      <div className='container__products__product'>
        <div className='container__products__product__first'>
          <img src='https://www.gaiadesign.com.mx/media/catalog/product/cache/28cb47c806b746a91bc25b380c9673fa/s/o/sofa_cama_sabina_rosa_still1_v2.jpg' alt='image-product' />
        </div>
        <div className='container__products__product__second'>
          <p className='container__products__product__second__product-name'> Product_name</p>
          <p className='container__products__product__second__category'> Category: </p>
          <div className='container__products__product__second__quantity'>
            <div className='container__products__product__second__quantity__minus'>
              <i className='fa-solid fa-minus' />
            </div>
            <p className='container__products__product__second__quantity__number'> 1 </p>
            <div className='container__products__product__second__quantity__plus'>
              <i className='fa-solid fa-plus' />
            </div>
          </div>
        </div>
        <div className='container__products__product__third'>
          <i className='fa-solid fa-xmark' />
          <p className='container__products__product__third__total'> $225 </p>
        </div>
      </div>
      <div className='container__products__divider' />
    </>

  )
}

export default CartProduct
