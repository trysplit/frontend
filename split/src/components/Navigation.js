import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'

const Naviagtion = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
   <NavNav>
      <div>
        <Navbar className="nav" color="faded" light>
          <NavbarBrand href="https://theappofsplit.netlify.com/" className="mr-auto">Home</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="mini" href="/Login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mini" href="/Register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mini" href="/Bill">Bill</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mini" href="/MyProfile">My Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
   </NavNav>
  );
}

const NavNav = styled.div`

nav{
  .mini{
    font-size: 2rem;
  }
  .mr-auto{
    font-size: 2rem
    font-family: 'Noticia Text', serif 
  } 
}
  `

export default Naviagtion;