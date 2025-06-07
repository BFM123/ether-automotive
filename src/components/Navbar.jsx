import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavList,
  NavLink,
  QuoteButton
} from '../styles/components/NavbarStyles';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="Ether Automotive" />
        </Logo>

        <NavList>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </NavList>

        <QuoteButton
          as={Link}
          to="/quote"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get a Quote</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </QuoteButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;