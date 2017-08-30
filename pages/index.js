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
import Contact from '../components/blocks/contact/contact'
import Text from '../components/blocks/text/text'

// Content
import data from '../data'

const IndexPage = (props) => { 
  return (
    <Layout>

      <About 
        {...data.about}
      />

      <Text 
        id='mission'
        title='Our Mission'
        blockClass='block-bg-lightGray'
        text={data.mission}
      />

      <Text
        text={data.summary}
      />

      <Contact 
        blockClass='block-bg-lightGray'
        {...data.contact}
      />

      <style jsx>{styles}</style> 
    </Layout>
  )
}

export default IndexPage
