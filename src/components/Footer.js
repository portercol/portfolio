import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='name'
              placeholder='Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Contact Me</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <div className='social-logo'>
              <small className='website-rights'>CP 2021</small>
            </div>
          </div>
          <div className='social-icons'>
            <a className='social-icon-link facebook'
              href='https://www.facebook.com/portercol/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <Tooltip title='view facebook'>
                <i className='fab fa-facebook-f'></i>
              </Tooltip>
            </a>
            <a className='social-icon-link instagram'
              href='https://www.instagram.com/thewalsterofficial/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <Tooltip title='view instagram'>
                <i className='fab fa-instagram'></i>
              </Tooltip>
            </a>
            <a className='social-icon-link github'
              href='https://github.com/portercol'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='github'
            >
              <Tooltip title='view github'>
                <i className='fab fa-github'></i>
              </Tooltip>
            </a>
            <a className='social-icon-link linkedIn'
              href='https://www.linkedin.com/in/collin-porter-7b65311a8/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Tooltip title='view linkedIn'>
                <i className='fab fa-linkedin'></i>
              </Tooltip>
            </a>
            <a className='social-icon-link resume'
              href='https://docs.google.com/document/d/1UhCsY-BLOo-PcmkHcXXtmOLo6ik-2PNcMuv4Jk6NQMs/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Resume'
            >
              <Tooltip title='view resume'>
                <i className='far fa-file-alt'></i>
              </Tooltip>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
