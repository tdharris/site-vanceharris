/* eslint-disable react/no-danger */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Package from '../../package'
import Navbar from '../navbar/navbar'
import { Parallax } from 'react-parallax'
import { Button } from 'react-bootstrap'

import styles from './styles'

export default class extends React.Component {

  render(props) {

    return (
      <header>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" /> 
          <link rel="stylesheet" type="text/css" href="static/lib/bootstrap-theme-toolkit/toolkit-startup.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Cedarville+Cursive" rel="stylesheet" />
          <script src="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyBUCjwkhVa8_zk00OEKB3VqZEmhw39BqM0"></script>
          <link rel="stylesheet" type="text/css" href="static/css/global.css" />
        </Head>
        <div>
          <Navbar/>

          <Parallax bgImage='../static/img/bridge.jpg'>
            <div className="block block-inverse block-fill-height block-transparent block-fill-height text-center">
              <div className="block-xs-middle">
                <h1 className="block-title">Dr. Vance Harris, M.D.</h1>
                <h4 className="text-muted">Family practice physician in Redding, California</h4>
               <br/>
                <Button bsSize="large" bsStyle="success" className="btn-transparent-outline">
                  <i className="icon icon-phone" />
                  <span><a className="noTextDecoration" href="tel:5302421227"> Make an Appointment</a></span>
                </Button>
              </div>
            </div>
          </Parallax>

          { this.props.children }
        </div>
        <style jsx>{styles}</style>
        {/* <script src="static/lib/bootstrap-theme-toolkit/toolkit.min.js"></script> */}
      </header>
    )
  }

}