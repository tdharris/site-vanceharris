/**
 * The index page uses a layout page that pulls in header and footer components
 */
import React from 'react'
import Layout from '../components/layout/layout'

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
        id='contact'
        blockClass='block-bg-lightGray'
        {...data.contact}
      >
        <p>
          We are not taking new patients.
          <br /><br />
        </p>
      </Contact>

    </Layout>
  )
}

export default IndexPage
