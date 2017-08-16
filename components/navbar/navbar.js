/* global window */
import Link from 'next/link'
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Collapse, Toggle, Button } from 'react-bootstrap'
import styles from './styles'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar inverse fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Dr. <span className="signature">Vance Harris</span> M.D.</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#about">About</NavItem>
                  <NavItem eventKey={2} href="#contact">Contact Us</NavItem>
                  <NavItem eventKey={3} href="#forms">Intake Forms</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <style jsx>{styles}</style>
      </div>
    );
  }
}