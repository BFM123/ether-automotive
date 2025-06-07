import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <TestimonialSlider />
    </>
  );
};

export default Home;