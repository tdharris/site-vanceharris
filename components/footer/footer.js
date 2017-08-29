import React from 'react'
import styles from './styles'
import { Image } from 'react-bootstrap'

export default() => (
  <footer id='contact' className='block block-inverse block-transparent'>
    <div className='container'>
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-md-4'>
          <h3 className='block-title'>
            <a href='#'>
              <h3>Dr. Vance Harris, M.D.</h3>
            </a>
          </h3>
          <p>&copy; {new Date().getYear() + 1900}</p>
          <div className='social-links social-icons'>
            <a href='#'><i className='icon icon-facebook' /></a>
            <a href='#'><i className='icon icon-houzz' /></a>
          </div>
        </div>

        <div className='col-xs-12 col-sm-6 col-md-5'>
          <div className='footer-contacts'>
            <div>
              <a href='https://www.google.com/maps/place/2632+Edith+Ave+b,+Redding,+CA+96001/@40.571222,-122.4010157,17z/data=!3m1!4b1!4m5!3m4!1s0x54d2ecf7ce99c0df:0x1d14b397d3c2a957!8m2!3d40.571222!4d-122.398827'><i className='icon icon-location' /></a>
              <p>
                <a href='https://www.google.com/maps/place/2632+Edith+Ave+b,+Redding,+CA+96001/@40.571222,-122.4010157,17z/data=!3m1!4b1!4m5!3m4!1s0x54d2ecf7ce99c0df:0x1d14b397d3c2a957!8m2!3d40.571222!4d-122.398827'>
                  <span className='new-line-span'>2632 Edith Ave, Suite B</span>
                  <span>Redding, CA 96001</span>
                </a>
              </p>
            </div>
            <div>
              <a href='tel:5302421227'><i className='icon icon-phone' /></a>
              <p><a href='tel:5302421227'>(530) 242-1227</a></p>
            </div>
            <div>
              <a href='mailto:office@vanceharris.com'><i className='icon icon-mail' /></a>
              <p><a href='mailto:office@vanceharris.com'>office@vanceharris.com</a></p>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-3'>
          <h4>Hours of Operation</h4>
          <p>
            Monday - Thursday<br/>
            8:00 – 5:00
          </p>
          <p>
            Friday<br/>
            8:00 – 1:00<br/>
            <i>The office is closed between 1:00 and 2:00</i>
          </p>
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </footer>
)
