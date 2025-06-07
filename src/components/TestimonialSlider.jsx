import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TestimonialContainer,
  TestimonialWrapper,
  Testimonial,
  ClientInfo,
  Navigation,
  NavButton
} from '../styles/components/TestimonialSliderStyles';

const testimonials = [
  {
    id: 1,
    text: "The quality of their paint protection service is outstanding. My car looks better than new!",
    name: "Client Name",
    role: "Car Enthusiast"
  },
  // ...add more testimonials
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <AnimatePresence mode='wait'>
          <Testimonial
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p>{testimonials[current].text}</p>
            <ClientInfo>
              <h4>{testimonials[current].name}</h4>
              <span>{testimonials[current].role}</span>
            </ClientInfo>
          </Testimonial>
        </AnimatePresence>
      </TestimonialWrapper>
      
      <Navigation>
        <NavButton onClick={prevTestimonial}>
          <span className="material-symbols-rounded">arrow_back</span>
        </NavButton>
        <NavButton onClick={nextTestimonial}>
          <span className="material-symbols-rounded">arrow_forward</span>
        </NavButton>
      </Navigation>
    </TestimonialContainer>
  );
};

export default TestimonialSlider;