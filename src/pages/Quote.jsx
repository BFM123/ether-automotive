import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QuoteWrapper,
  QuoteTitle,
  QuoteForm,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  QuoteBackground,
  FormContainer,
  ProgressBar,
  ProgressStep,
  FormSection,
  NavigationButtons,
  BackButton,
  NextButton,
  SuccessMessage
} from '../styles/pages/QuoteStyles';

const Quote = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    service: '',
    details: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e) => {
    if (e) e.preventDefault();
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
    setIsSubmitted(true);
  };

  return (
    <QuoteWrapper>
      <QuoteBackground />
      
      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <QuoteTitle>Get a Quotation</QuoteTitle>
        
        {!isSubmitted ? (
          <>
            <ProgressBar>
              <ProgressStep isActive={currentStep >= 1} isComplete={currentStep > 1}>
                <span>1</span>
                <p>Vehicle Details</p>
              </ProgressStep>
              <ProgressStep isActive={currentStep >= 2} isComplete={currentStep > 2}>
                <span>2</span>
                <p>Service Selection</p>
              </ProgressStep>
              <ProgressStep isActive={currentStep >= 3}>
                <span>3</span>
                <p>Contact Info</p>
              </ProgressStep>
            </ProgressBar>
            
            <QuoteForm onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <FormSection
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormGroup>
                      <Label>Vehicle Make</Label>
                      <Input 
                        type="text" 
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label>Vehicle Model</Label>
                      <Input 
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label>Year</Label>
                      <Input 
                        type="number"
                        name="year"
                        min="1900"
                        max={new Date().getFullYear() + 1}
                        value={formData.year}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <NavigationButtons>
                      <NextButton
                        type="button"
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next <span className="material-symbols-rounded">arrow_forward</span>
                      </NextButton>
                    </NavigationButtons>
                  </FormSection>
                )}
                
                {currentStep === 2 && (
                  <FormSection
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormGroup>
                      <Label>Service Type</Label>
                      <Select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="detailing">Premium Detailing</option>
                        <option value="paint-protection">Paint Protection Film (PPF)</option>
                        <option value="ceramic-coating">Ceramic Coating</option>
                        <option value="interior">Interior Restoration</option>
                        <option value="other">Other Services</option>
                      </Select>
                    </FormGroup>
                    
                    <FormGroup>
                      <Label>Additional Details</Label>
                      <TextArea 
                        rows={4}
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us more about what you need..."
                      />
                    </FormGroup>
                    
                    <NavigationButtons>
                      <BackButton
                        onClick={prevStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-rounded">arrow_back</span> Back
                      </BackButton>
                      <NextButton
                        onClick={nextStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next <span className="material-symbols-rounded">arrow_forward</span>
                      </NextButton>
                    </NavigationButtons>
                  </FormSection>
                )}
                
                {currentStep === 3 && (
                  <FormSection
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormGroup>
                      <Label>Full Name</Label>
                      <Input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label>Email</Label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label>Phone</Label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <NavigationButtons>
                      <BackButton
                        onClick={prevStep}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="material-symbols-rounded">arrow_back</span> Back
                      </BackButton>
                      <SubmitButton
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Quote <span className="material-symbols-rounded">send</span>
                      </SubmitButton>
                    </NavigationButtons>
                  </FormSection>
                )}
              </AnimatePresence>
            </QuoteForm>
          </>
        ) : (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="material-symbols-rounded">check_circle</span>
            <h2>Quote Request Received!</h2>
            <p>Thank you for your request. Our team will prepare quotation and provide feedback within 24 hours.</p>
          </SuccessMessage>
        )}
      </FormContainer>
    </QuoteWrapper>
  );
};

export default Quote;