import React from 'react'

// Style
import './Cart.scss'

const Cart = () => {
  return (
    <div className='container'>
      <div className='container__close'>
        <i className='fa-solid fa-arrow-left' />
        <p> Close </p>
      </div>
      <div className='container__products'>
        {/* First */}
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
        {/* Second */}
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
        {/* Third */}
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
        {/* Forth */}
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
      </div>
      <div className='container__sticky'>
        <div className='container__total'>
          <p className='container__total__text'> Total </p>
          <p className='container__total__number'> $112 </p>
        </div>
        <button className='container__order'> Place Order </button>
      </div>
      <div className='container__continue-shopping'>
        <p className='container__continue-shopping__link'> Continue Shopping </p>
      </div>
    </div>
  )
}

export default Cart
