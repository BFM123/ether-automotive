import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.large}`};
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const FeatureItem = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  
  .material-symbols-rounded {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;