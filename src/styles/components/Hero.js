import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  SubTitle,
  Title,
  Description,
  HeroButton,
  HeroBanner
} from '@styles/components/HeroStyles';
import heroBg from '@assets/images/hero-bg.jpg';
import heroBanner from '@assets/images/hero-banner.png';

const Hero = () => {
  return (
    <HeroSection style={{ backgroundImage: `url(${heroBg})` }}>
      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SubTitle>We have talented engineers & mechanics</SubTitle>
          <Title>Auto-Detailing, Car Wash, Service</Title>
          <Description>
            Keep the engine strong and the journey long, With service that's quick and never wrong.
            Precision care for your vehicle. Because safety and performance matter.
          </Description>
          <HeroButton
            as={Link}
            to="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Our Services</span>
            <span className="material-symbols-rounded">arrow_forward</span>
          </HeroButton>
        </HeroContent>

        <HeroBanner
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={heroBanner} alt="red motor vehicle" className="move-anim" />
        </HeroBanner>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;