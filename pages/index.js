/**
 * The index page uses a layout page that pulls in header and footer components
 */
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import Page from '../components/page/page'
import Layout from '../components/layout/layout'
import fetch from 'isomorphic-unfetch'
import styles from './styles'

import Header from '../components/header/header'
import About from '../components/blocks/about/about'
import Features from '../components/blocks/features/features'
import Posts from '../components/blocks/posts/posts'
// import Location from '../components/blocks/location/location'
import Contact from '../components/blocks/contact/contact'

const IndexPage = (props) => { 
  return (
    <Layout>
      <Header/>

      <About/>
      <Features/>
      {/* <Location center={props.map.center} zoom={props.map.zoom} /> */}
      <Contact/>

      <style jsx>{styles}</style> 
    </Layout>
  )
}

IndexPage.getInitialProps = async ({ req }) => {

  const pageData = {}
  
  pageData.map = {
    center: {
      lat: 59.95, 
      lng: 30.33
    },
    zoom: 11
  }

  return pageData

}

export default IndexPage
