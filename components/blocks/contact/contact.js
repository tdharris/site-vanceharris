import React from 'react'
import { Image, Button } from 'react-bootstrap'
import style from './style'

export default ({ children, id, blockClass, address, phone, download, map }) => (

  <div id={id} className={'block text-center ' + (blockClass || '')}>
    <div className='container'>
      <div className='row contact-block'>
        <h2 className='text-center'>Contact Us</h2>
        <address>
          <h4>
            {address.line1}
            <br />
            {address.line2}
          </h4>
          <h4>{phone.pretty}</h4>
        </address>
        {children}
        <Button bsSize='large' bsStyle='primary'>
          <a className='contact-btn' href={phone.url}>
            <span className='icon icon-phone'> Call Us</span>
          </a>
        </Button>
        {' '}
        <Button bsSize='large' bsStyle='danger'>
          <a
            className='contact-btn'
            href={address.url}
          >
            <span className='icon icon-map'> Navigate</span>
          </a>
        </Button>
        <br /><br />
        <Button bsSize='large' bsStyle='success'>
          <a href={download.url} className='noTextDecoration'>
            <i className='glyphicon glyphicon-download-alt' />
            <span>{' ' + download.title}</span>
          </a>
        </Button>
        <br /><br />
        <Image src={address.image} responsive className='item-center padding-top' />
      </div>
    </div>
    <style jsx>{style}</style>
  </div>

)
