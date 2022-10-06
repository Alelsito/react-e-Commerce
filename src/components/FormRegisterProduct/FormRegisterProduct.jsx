// React
import { useState } from 'react'

// React router dom
import { useNavigate } from 'react-router-dom'

// Custom Hook
import useForm from '@/hooks/useForm'

// Services
import { postCreateItem } from '@/services/axiosMethods'

// Image
import JackImage from '@/assets/Jack.webp'

// Styles
import '../FormSignUp/Form.scss'

const FormRegisterProduct = () => {
  const navigate = useNavigate()
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [submittedWell, setSubmittedWell] = useState(false)

  const noError = () => {
    setSubmitError(false)
    setErrorMessage(null)
  }

  const showError = (error) => {
    setSubmitError(true)
    setErrorMessage(error)
  }
  const submittedCorrectly = () => {
    setSubmittedWell(false)
    navigate('/')
  }

  const sendData = async (data) => {
    try {
      const result = await postCreateItem(data)
      if (result.status === 201) {
        noError()
        setSubmittedWell(true)
        setTimeout(submittedCorrectly, 3500)
      }
    } catch (error) {
      showError(error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: 'e9cbfac1-301a-42c3-b94a-711a39dc7ed1',
    image: ''
  })

  return (
    <>
      <div className='background' />
      <article className='form--register-product'>
        {
          submittedWell
            ? (
              <div className='alert--success'>
                <div className='alert__container'>
                  <div className='alert__container__first'>
                    <i className='bi bi-exclamation-circle' />
                    <p> Your product has been successfully created! </p>
                  </div>
                </div>
              </div>
              )
            : (
              <div className='alert--hidden' />
              )
        }
        {
          submitError
            ? (
              <div className='alert--error'>
                <div className='alert__container'>
                  <div className='alert__container__first'>
                    <i className='bi bi-exclamation-circle' />
                    <p> {errorMessage} -- Check it out! </p>
                  </div>
                  <div className='alert__container__second'>
                    <i className='bi bi-x-circle' onClick={noError} />
                  </div>
                </div>
              </div>
              )
            : (
              <div className='alert--hidden' />
              )
        }
        <div className='form__left-side--register-product'>
          <div className='form__left-side__structure'>
            <img className='form__left-side__image--register-product' src={JackImage} alt='logo' />
            <div className='form__left-side__text--title'> "ADMIN" </div>
            <div className='form__left-side__text--subtitle'> just because they cannot touch it, <br /> doesn't mean they don't want it </div>
            <div className='form__left-side__circle'>
              <div className='form__left-side__circle--big--register-product' />
              <div className='form__left-side__circle--small' />
            </div>
          </div>
        </div>
        <div className='form__right-side'>
          <div className='form__right-side__structure'>
            <p className='form__right-side__title'> Register your product </p>
            <form className='form__right-side__inputs' onSubmit={handleSubmit}>
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Product name'
                id='product_name'
                name='product_name'
                value={input.product_name}
                onChange={handleInputChange}
              />
              <i className='bi bi-box-seam' />
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Description'
                id='description'
                name='description'
                value={input.description}
                onChange={handleInputChange}
              />
              <i className='bi bi-card-text bi-card-text-2' />
              <input
                type='number'
                min='1'
                className='form__right-side__inputs__input'
                placeholder='Price'
                id='price'
                name='price'
                value={input.price}
                onChange={handleInputChange}
              />
              <i className='bi bi-currency-dollar' />
              <select
                className='form__right-side__inputs__input'
                id='category'
                name='category'
                value={input.category}
                onChange={handleInputChange}
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
                value={input.brand}
                onChange={handleInputChange}
              />
              <i className='bi bi-c-circle' />
              <input
                type='text'
                className='form__right-side__inputs__input'
                placeholder='Url Image'
                id='image'
                name='image'
                value={input.image}
                onChange={handleInputChange}
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
