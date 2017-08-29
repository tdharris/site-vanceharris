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
import Contact from '../components/blocks/contact/contact'
import Text from '../components/blocks/text/text'
import ParallaxItem from '../components/blocks/parallax-item/parallax-item'

// Content
import dataAbout from '../data/about'
import dataMission from '../data/mission'
import dataSummary from '../data/summary'

const IndexPage = (props) => { 
  return (
    <Layout>
      <Header />

      <About 
        id={dataAbout.id}
        title={dataAbout.title}
        imgUrl={dataAbout.imgUrl}
        text={dataAbout.text}
        quote={dataAbout.quote}
      />

      <Text 
        id='mission'
        title='Our Mission'
        blockClass='block-bg-lightGray'
        text={dataMission}
      />

      <Text
        text={dataSummary}
      />

      <Contact 
        blockClass='block-bordered'
      />

      <style jsx>{styles}</style> 
    </Layout>
  )
}

IndexPage.getInitialProps = async ({ req }) => {

  const data = {};
  return data

}

export default IndexPage