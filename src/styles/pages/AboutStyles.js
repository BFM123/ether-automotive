import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.large}`};
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight || '80px'});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.15;
    z-index: -1;
  }
`;

export const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => `${theme.colors.background}CC`}; /* Semi-transparent background */
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.small};
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export const AboutFeatures = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.xl};
  flex-wrap: nowrap; /* Prevent wrapping to keep features in one row */
  justify-content: center;
  align-items: stretch;
  width: 100%;

  /* Center icons inside each FeatureItem */
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 250px;
    min-width: 220px;
    max-width: 300px;
  }
`;

export const FeatureItem = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .material-symbols-rounded {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    line-height: 1.6;
  }
`;