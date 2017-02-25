import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="index.html" className="favicon">R</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Blog</NavItem>
                    <NavItem eventKey={2} href="mailto:Royal4rudra@gmail.com?Subject=Hello">Contact</NavItem>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;
