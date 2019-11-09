import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import { initGA, logPageView } from '../../utils/analytics'

export default class Layout extends React.Component {
  static propTypes () {
    return {
      children: React.PropTypes.object.isRequired
    }
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
