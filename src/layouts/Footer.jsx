import React from 'react'

// Styles
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__information'>
        <div className='footer__information__policy'>
          <span className='footer__information--main'> Policy </span>
          <span className='footer__information--content'> Return policy </span>
          <span className='footer__information--content'> Terms of us </span>
          <span className='footer__information--content'> Security </span>
          <span className='footer__information--content'> Privacy </span>
        </div>
        <div className='footer__information__about'>
          <span className='footer__information--main'> About </span>
          <span className='footer__information--content'> Contact us </span>
          <span className='footer__information--content'> About us </span>
          <span className='footer__information--content'> Careers </span>
        </div>
        <div className='footer__information__categories'>
          <span className='footer__information--main'> Categories </span>
          <span className='footer__information--content'> Music </span>
          <span className='footer__information--content'> Health </span>
          <span className='footer__information--content'> Computers </span>
          <span className='footer__information--content'> Movies... </span>
        </div>
        <div className='footer__information__brands'>
          <span className='footer__information--main'> Brands </span>
          <span className='footer__information--content'> Thompson LLC </span>
          <span className='footer__information--content'> Franecki LLC </span>
          <span className='footer__information--content'> Bradtke LLC </span>
          <span className='footer__information--content'> Tromp Group... </span>
        </div>
      </div>
      <div className='footer__right'>
        <div className='footer__right__container'>
          <div className='footer__right__container__location'>
            <i className='bi bi-geo-alt' />
            <span className='footer__right__container__location__text'> United States </span>
          </div>
          <div className='footer__right__container__bugis-rights'>
            <span className='footer__right__container__bugis-rights__text'> © 2022 | Bugi's All Rights Reserved </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
