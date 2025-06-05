import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  background: #111;
  color: #fff;
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
`;

export default function About() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Ether Automotive</h2>
        <p>Passionate about delivering exceptional automotive services...</p>
      </motion.div>
    </Container>
  );
}