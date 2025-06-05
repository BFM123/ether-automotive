import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    
    &:hover {
      color: #e60000;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Ether Automotive. All rights reserved.</p>
      <SocialLinks>
        <a href="https://instagram.com/etherautomotive" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </SocialLinks>
    </FooterContainer>
  );
}