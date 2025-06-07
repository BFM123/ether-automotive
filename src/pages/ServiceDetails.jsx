import React from 'react';
import { motion } from 'framer-motion';
import {
  ServiceDetailsContainer,
  ServiceCard,
  ServiceImage,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  PriceTag
} from '../styles/components/ServiceDetailsStyles';

const ServiceDetails = ({ service }) => {
  return (
    <ServiceDetailsContainer>
      <ServiceCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceImage src={service.image} alt={service.title} />
        <ServiceContent>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
          <PriceTag>Starting from ${service.price}</PriceTag>
        </ServiceContent>
      </ServiceCard>
    </ServiceDetailsContainer>
  );
};

export default ServiceDetails;