import React, { useState } from 'react';
import {
  FAQContainer,
  FAQTitle,
  FAQList,
  FAQItem,
  Question,
  Answer,
  Icon
} from '../styles/components/FAQStyles';

import { AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of paint protection do you offer?",
      answer: "We offer Premium PPF (Paint Protection Film), Ceramic Coating, and Nano-Ceramic treatments to protect your vehicle's paint from scratches, UV damage, and environmental contaminants."
    },
    {
      question: "How long does a ceramic coating last?",
      answer: "Our professional ceramic coatings typically last 5-7 years with proper maintenance. We provide detailed care instructions and offer maintenance packages to ensure longevity."
    },
    {
      question: "Do you offer mobile services?",
      answer: "Yes, we offer mobile detailing services within a 25-mile radius of our location for select services. Contact us for availability and details."
    }
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQList>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {faq.question}
              <Icon isOpen={activeIndex === index}>
                <span className="material-symbols-rounded">
                  expand_more
                </span>
              </Icon>
            </Question>
            <AnimatePresence>
              {activeIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;