import React from 'react';
import { motion } from 'framer-motion';
import {
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  SubmitButton,
  ContactInfo
} from '../styles/pages/ContactStyles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <ContactWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Contact Us</h1>
        <ContactInfo>
          <p>Get in touch with our expert team for premium automotive services.</p>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <ContactInput 
            type="text" 
            placeholder="Name" 
            required 
          />
          <ContactInput 
            type="email" 
            placeholder="Email" 
            required 
          />
          <ContactTextArea 
            placeholder="Message" 
            required 
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </motion.div>
    </ContactWrapper>
  );
};

export default Contact;