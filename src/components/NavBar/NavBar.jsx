import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Roomiez</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/rooms">Rooms</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/messenger">Messenger</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar />
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;
