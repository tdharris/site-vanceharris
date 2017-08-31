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
          <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
          <link rel='stylesheet' type='text/css' href='static/lib/bootstrap-theme-toolkit/toolkit-startup.min.css' />
          <link rel='stylesheet' type='text/css' href='static/css/global.css' />
        </Head>
        <div>
          <Navbar />

          <Parallax bgImage='static/img/bridge-optimized.jpg'>
            <div className='block block-fill-height block-inverse block-transparent text-center'>
              <div className='block-xs-middle'>
                <h1 className='block-title'>{ contact.name }</h1>
                <h4 className='text-muted'>{ contact.tagline }</h4>
                <br />
                <Button bsSize='large' bsStyle='success' className='btn-transparent-outline'>
                  <i className='icon icon-phone' />
                  <span><a className='noTextDecoration' href={contact.phone.url}> Make an Appointment</a></span>
                </Button>
              </div>
            </div>
          </Parallax>

          { this.props.children }
        </div>
        <style jsx>{styles}</style>
      </header>
    )
  }
}
