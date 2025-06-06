import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavContainer, Logo, Menu } from "@styles/components/NavbarStyles";
// Import using the new alias
import logo from "@assets/images/logo.png";

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo src={logo} alt="Ether Automotive" />
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </Menu>
      </NavContainer>
    </Nav>
  );
}