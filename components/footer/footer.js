import React from 'react'
import styles from './styles'
import contact from '../../data/contact'

export default() => (
  <footer id='contact' className='block block-inverse block-transparent'>
    <div className='container'>
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-md-4'>
          <h3 className='block-title'>
            <a href='#'>
              <h3>{ contact.name }</h3>
            </a>
          </h3>
          <p>&copy; {new Date().getYear() + 1900}</p>
          {/* <div className='social-links social-icons'>
            <a href='#'><i className='icon icon-facebook' /></a>
          </div> */}
        </div>

        <div className='col-xs-12 col-sm-6 col-md-5'>
          <div className='footer-contacts'>
            <div>
              <a href={contact.address.url}><i className='icon icon-location' /></a>
              <p>
                <a href={contact.address.url}>
                  <span className='new-line-span'>{ contact.address.line1 }</span>
                  <span>{ contact.address.line2 }</span>
                </a>
              </p>
            </div>
            <div>
              <a href={contact.phone.url}><i className='icon icon-phone' /></a>
              <p><a href={contact.phone.url}>{ contact.phone.pretty }</a></p>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-3'>
          <h4>{ contact.hours.title }</h4>
          {
            contact.hours.days.map((day, i) => (
              <p key={i}>
                { day.dayRange }
                <br />
                { day.timeRange }
                <br />
                <i>{ day.note }</i>
              </p>
            ))
          }
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </footer>
)
