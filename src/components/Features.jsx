import React from 'react';
import { motion } from 'framer-motion';
import {
  FeaturesContainer,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from '../styles/components/FeaturesStyles';

const Features = () => {
  const features = [
    {
      icon: "auto_awesome",
      title: "Premium Service",
      description: "Expert care with attention to every detail of your vehicle"
    },
    {
      icon: "schedule",
      title: "Quick Turnaround",
      description: "Efficient service delivery without compromising quality"
    },
    {
      icon: "verified",
      title: "Certified Experts",
      description: "Highly trained technicians with years of experience"
    }
  ];

  return (
    <FeaturesContainer>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FeatureIcon className="material-symbols-rounded">
              {feature.icon}
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;