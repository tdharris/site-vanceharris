import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import contact from '../../data/contact'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>Dr. Vance Harris, M.D.</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='#about'>About</NavItem>
              <NavItem eventKey={2} href='#mission'>Our Mission</NavItem>
              <NavItem eventKey={4} href='#contact'>Contact Us</NavItem>
              <NavItem eventKey={4} href={contact.download.url}>
                <i className='glyphicon glyphicon-download-alt' /> New Patient
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
