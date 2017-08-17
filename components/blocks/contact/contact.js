import React from 'react'
import { Image, Button, ButtonToolbar } from 'react-bootstrap'
import style from './style'

export default(props) => (

<div className="block block-bordered text-center">
  <div className="container">
    <div className="row contact-block">
      <h2 id="contact" className="text-center">Contact Us</h2>
      <address>
        <h4>
            2632 Edith Ave, Suite B <br/>
            Redding, CA 96001
        </h4>
        <h4>(530) 242-1227</h4>
      </address>
      <Button bsSize="large" bsStyle="primary">
        <a className="contact-btn" href="tel:5302421227">
          <span className="icon icon-phone"> Call Us</span>
        </a>
      </Button>
      {' '}
      <Button bsSize="large" bsStyle="success">
        <a className="contact-btn"
            href="https://www.google.com/maps/place/2632+Edith+Ave+b,+Redding,+CA+96001/@40.571222,-122.4010157,17z/data=!3m1!4b1!4m5!3m4!1s0x54d2ecf7ce99c0df:0x1d14b397d3c2a957!8m2!3d40.571222!4d-122.398827">
            <span className="icon icon-map"> Navigate</span>
        </a>
      </Button>
      <Image src='/static/img/location-map.jpg' responsive className='item-center padding-top' />
    </div>
  </div>
  <style jsx>{style}</style>
</div>
 
)

