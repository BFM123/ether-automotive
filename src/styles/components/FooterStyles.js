import React from "react";
import { FooterWrapper, SocialLinks } from "../styles/components/FooterStyles";
import facebook from "@assets/icons/facebook.svg";
import twitter from "@assets/icons/twitter.svg";
import instagram from "@assets/icons/instagram.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <SocialLinks>
        <a href="https://facebook.com">
          <img src={facebook} alt="Facebook" />
        </a>
        // ...existing code...
      </SocialLinks>
    </FooterWrapper>
  );
}