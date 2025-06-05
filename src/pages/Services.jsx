import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: #111;
  padding: 30px;
  border-radius: 8px;
  text-align: center;

  h3 {
    color: #e60000;
    margin-bottom: 15px;
  }
`;

export default function Services() {
  const services = [
    {
      title: "Performance Tuning",
      description: "Custom ECU tuning and performance optimization"
    },
    {
      title: "Custom Builds",
      description: "Full vehicle customization and builds"
    },
    {
      title: "Maintenance",
      description: "Premium maintenance and service packages"
    }
  ];

  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
}