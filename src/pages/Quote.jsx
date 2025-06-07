import React from 'react';
import { motion } from 'framer-motion';
import {
  QuoteWrapper,
  QuoteTitle,
  QuoteForm,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton
} from '../styles/pages/QuoteStyles';

const Quote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <QuoteWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <QuoteTitle>Get a Quote</QuoteTitle>
        <QuoteForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Vehicle Make</Label>
            <Input type="text" required />
          </FormGroup>
          
          <FormGroup>
            <Label>Vehicle Model</Label>
            <Input type="text" required />
          </FormGroup>
          
          <FormGroup>
            <Label>Service Type</Label>
            <Select required>
              <option value="">Select a service</option>
              <option value="detailing">Auto Detailing</option>
              <option value="paint-protection">Paint Protection</option>
              <option value="ceramic-coating">Ceramic Coating</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Additional Details</Label>
            <TextArea rows={4} />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Quote
          </SubmitButton>
        </QuoteForm>
      </motion.div>
    </QuoteWrapper>
  );
};

export default Quote;