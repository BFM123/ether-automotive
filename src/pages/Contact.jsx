import React from "react";
import { motion } from "framer-motion";
import {
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactTextArea,
  SubmitButton
} from "../styles/pages/ContactStyles";

export default function Contact() {
  return (
    <ContactWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Us</h2>
        <ContactForm onSubmit={(e) => e.preventDefault()}>
          <ContactInput type="text" placeholder="Name" />
          <ContactInput type="email" placeholder="Email" />
          <ContactTextArea placeholder="Message" />
          <SubmitButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </motion.div>
    </ContactWrapper>
  );
}