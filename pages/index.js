/**
 * The index page uses a layout page that pulls in header and footer components
 */
import React from 'react'
import Layout from '../components/layout/layout'
import styles from './styles'

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
