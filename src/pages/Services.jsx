// src/pages/Services.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #000;
  color: #fff;
  padding: 60px 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

export default function Services() {
  return (
    <Container>
      <h2>Our Services</h2>
      <List>
        <li>Electric Vehicle Design & Prototyping</li>
        <li>Performance Customization</li>
        <li>Automotive Engineering Consultation</li>
        <li>High-Performance Tuning</li>
        <li>Battery and Motor Systems</li>
      </List>
    </Container>
  );
}