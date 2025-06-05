import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeroWrapper,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  heroVariants
} from '../styles/components/HeroStyles';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          Welcome to Ether Automotive
        </HeroTitle>
        <HeroSubtitle
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ delay: 0.2 }}
        >
          Experience premium automotive services and custom builds
        </HeroSubtitle>
        <HeroButton
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
        >
          Get Started
        </HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;