import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Naviagtion = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="https://theappofsplit.netlify.com/" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Bill">Bill</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MyProfile">My Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Naviagtion;