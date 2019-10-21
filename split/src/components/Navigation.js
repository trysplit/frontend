import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Naviagtion = (props) => {


  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register">Register</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Naviagtion;