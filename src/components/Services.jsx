import React from 'react';
import {
  ServicesSection,
  ServicesList,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ReadMoreLink,
  ServiceBanner
} from '../styles/components/ServicesStyles';
import services1 from '../assets/images/services-1.png';
import services2 from '../assets/images/services-2.png';

const Services = () => {
  return (
    <ServicesSection>
      <ServicesList>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceIcon src={services1} alt="Paint Protection" />
          <ServiceTitle>Paint Protection Film</ServiceTitle>
          <ServiceDescription>
            Shield your car from scratches and sun. With PPF, the protection's just begun.
          </ServiceDescription>
          <ReadMoreLink to="/services">Read more</ReadMoreLink>
        </ServiceCard>

        <ServiceBanner
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={services2} alt="Red Car" className="move-anim" />
        </ServiceBanner>
      </ServicesList>
    </ServicesSection>
  );
};

export default Services;