import React from 'react'

// Image
import JackImage from '../../assets/Jack.webp'

const FormRegisterProduct = () => {
  return (
    <>
      <div className='background' />
      <article className='form--register-product'>
        <div className='form__left-side--register-product'>
          <div className='form__left-side__structure'>
            <img className='form__left-side__image--register-product' src={JackImage} alt='logo' />
            <div className='form__left-side__text--title'> "ADMIN" </div>
            <div className='form__left-side__text--subtitle--register-product'> just because they cannot touch it, <br /> doesn't mean they don't want it </div>
            <div className='form__left-side__circle'>
              <div className='form__left-side__circle--big--register-product' />
              <div className='form__left-side__circle--small' />
            </div>
          </div>
        </div>
        <div className='form__right-side'>
          <div className='form__right-side__structure'>
            <p className='form__right-side__title'> Register your product </p>
            <form className='form__right-side__inputs'>
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Product name'
                id='product_name'
                name='product_name'
                value=''
                onChange={() => {}}
              />
              <i className='bi bi-box-seam' />
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Description'
                id='description'
                name='description'
                value=''
                onChange={() => {}}
              />
              <i className='bi bi-card-text bi-card-text-2' />
              <input
                type='number'
                min='1'
                className='form__right-side__inputs__input'
                placeholder='Price'
                id='price'
                name='price'
                value=''
                onChange={() => {}}
              />
              <i className='bi bi-currency-dollar' />
              <select
                className='form__right-side__inputs__input'
                id='category'
                name='category'
                value=''
                onChange={() => {}}
              >
                <option hidden value=''> Category </option>
                <option value='Books'> Books </option>
                <option value='Movies'> Movies </option>
                <option value='Music'> Music </option>
                <option value='Games'> Games </option>
                <option value='Electronics'> Electronics </option>
                <option value='Computers'> Computers </option>
                <option value='Home'> Home </option>
                <option value='Garden'> Garden </option>
                <option value='Tools'> Tools </option>
                <option value='Grocery'> Grocery </option>
                <option value='Health'> Health </option>
                <option value='Beauty'> Beauty </option>
                <option value='Toys'> Toys </option>
                <option value='Kids'> Kids </option>
                <option value='Baby'> Baby </option>
                <option value='Clothing'> Clothing </option>
                <option value='Shoes'> Shoes </option>
                <option value='Jewelery'> Jewelery </option>
                <option value='Sports'> Sports </option>
                <option value='Outdoors'> Outdoors </option>
                <option value='Automotive'> Automotive </option>
                <option value='Industrial'> Industrial </option>
              </select>
              <i className='bi bi-tags' />
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Brand'
                id='brand'
                name='brand'
                value=''
                onChange={() => {}}
              />
              <i className='bi bi-c-circle' />
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Url Image'
                id='image'
                name='image'
                value=''
                onChange={() => {}}
              />
              <i className='bi bi-image' />
              <button className='form__right-side__inputs__button-principal--register-product' type='submit'> Register </button>
            </form>
          </div>
        </div>
      </article>
    </>
  )
}

export default FormRegisterProduct
