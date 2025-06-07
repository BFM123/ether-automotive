import React from 'react';
import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutDescription,
  AboutFeatures,
  FeatureItem
} from '../styles/pages/AboutStyles';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutContainer>
      <AboutContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutTitle>About Ether Automotive</AboutTitle>
        <AboutDescription>
          At Ether Automotive, we don’t just service cars—we elevate them. Based in Manpada, 
          Thane, our mission is rooted in automotive passion and a relentless pursuit of 
          perfection. We specialize in premium paint protection solutions including PPF 
          (Paint Protection Film), ceramic and graphene coatings, advanced paint correction, 
          and expert-level auto detailing.
        </AboutDescription>

        <AboutDescription>
          With every vehicle we touch, we aim to restore brilliance, enhance longevity, and 
          bring out the best in your drive. Whether it’s a daily wash or a complete detailing 
          transformation, our work reflects a commitment to craftsmanship and care.
        </AboutDescription>

        <AboutTitle as="h3">Why Choose Us?</AboutTitle>

        <AboutFeatures>
          <FeatureItem>
            <span className="material-symbols-rounded">verified</span>
            <h3>Expert Technicians</h3>
            <p>Certified professionals with years of experience in auto detailing, paint protection,
               and advanced coatings
            </p>
          </FeatureItem>
          <FeatureItem>
            <span className="material-symbols-rounded">schedule</span>
            <h3>Quick Service</h3>
            <p>Efficiency without compromise—every service is performed with 
            precision and speed Efficient service without compromising quality
            </p>
          </FeatureItem>
          
          <FeatureItem>
            <span className="material-symbols-rounded">auto_awesome</span>
            <h3>Premium Quality</h3>
            <p>We use only the highest-grade materials and equipment to protect and 
              enhance your vehicle
            </p>
          </FeatureItem>
        </AboutFeatures>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;