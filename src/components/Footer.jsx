import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  SocialLinks,
  Copyright
} from '../styles/components/FooterStyles';


import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>About Us</h3>
            <p>Premium automotive services and custom builds for car enthusiasts who demand excellence.</p>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact</h3>
            <p>123 Auto Street<br />Car City, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
          </FooterSection>
        </FooterGrid>
        
        <SocialLinks>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-rounded">photo_camera</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-rounded">face</span>
          </a>
        </SocialLinks>
        
        <Copyright>
          © {new Date().getFullYear()} Ether Automotive. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;