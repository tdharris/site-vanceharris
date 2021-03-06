/* eslint-disable react/no-danger */
import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar/navbar'
import { Parallax } from 'react-parallax'
import { Button } from 'react-bootstrap'

import contact from '../../data/contact'

import styles from './styles'

export default class extends React.Component {
  render (props) {
    return (
      <header>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Vance Harris, M.D.</title>
          <link
            rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
            integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossOrigin='anonymous'
          />
          <link rel='stylesheet' type='text/css' href='lib/bootstrap-theme-toolkit/toolkit-startup.min.css' />
          <link rel='stylesheet' type='text/css' href='css/global.css' />
        </Head>
        <div>
          <Navbar />

          <Parallax bgImage='img/bridge-optimized.jpg'>
            <div className='block block-fill-height block-inverse block-transparent text-center'>
              <div className='welcome-text block-xs-middle'>
                <h1 className='block-title'>{contact.name}</h1>
                <h4 className='text-muted'>{contact.tagline}</h4>
                <br />
                <Button bsSize='large' bsStyle='success' className='btn-transparent-outline'>
                  <i className='icon icon-phone' />
                  <span><a className='noTextDecoration' href={contact.phone.url}> Make an Appointment</a></span>
                </Button>
              </div>
            </div>
          </Parallax>

          {this.props.children}
        </div>
        <style jsx>{styles}</style>
      </header>
    )
  }
}
