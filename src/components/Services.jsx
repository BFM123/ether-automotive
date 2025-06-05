import React from 'react';
import { motion } from 'framer-motion';
import {
  ServicesWrapper,
  ServiceGrid,
  ServiceCard
} from '../styles/components/ServicesStyles';

const services = [
  {
    title: 'Performance Tuning',
    description: 'Custom ECU mapping and performance optimization for maximum output.'
  },
  {
    title: 'Custom Builds',
    description: 'Full vehicle customization from concept to completion.'
  },
  {
    title: 'Maintenance',
    description: 'Premium maintenance services to keep your vehicle in top condition.'
  }
];

export default function Services() {
  return (
    <ServicesWrapper>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesWrapper>
  );
}