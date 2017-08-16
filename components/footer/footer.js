import Link from 'next/link'
import React from 'react'
import Package from '../../package'
import { Navbar, Nav, NavItem, NavDropdown, Button } from 'react-bootstrap';

export default() => (
  <footer>
    <div className="container">
      <p>
        <Link prefetch href="/"><a><strong>Home</strong></a></Link>
        &nbsp;|&nbsp;
        <Link href="https://github.com/selfcontained/bbbuilders-public"><a>bbbuilders-public {Package.version}</a></Link>
        &nbsp;|&nbsp;
        <Link href="https://github.com/zeit/next.js"><a>nextjs {Package.dependencies.next}</a></Link>
        &nbsp;| &copy; {new Date().getYear() + 1900}
      </p>
    </div>

    {/* <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Dr. <span className="signature">Vance Harris</span> M.D.</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#about">About</NavItem>
        <NavItem eventKey={2} href="#location">Our Location</NavItem>
        <NavItem eventKey={2} href="#contact">Contact Us</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <Button bsStyle="primary" bsSize="small">Intake Forms</Button>
        </NavItem>
      </Nav>
    </Navbar> */}
  </footer>
)