import React from 'react'
// import Header from '../header/header'
import Footer from '../footer/footer'

export default class extends React.Component {

  static propTypes() {
    return {
      children: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
        {/* <Header/> */}
        { this.props.children }
        <Footer/>
      </div>
    )
  }

}