import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.section`
  height: 90vh;
  position: relative;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.surface}
  );
  overflow: hidden;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: relative;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  max-width: 600px;
`;

export const HeroButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const heroVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};