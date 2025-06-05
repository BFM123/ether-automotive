import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #000, #111);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #e60000;
`;

export default function HeroSection() {
  return (
    <Hero>
      <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Welcome to Ether Automotive</Title>
      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        Innovation in Motion
      </Subtitle>
    </Hero>
  );
}