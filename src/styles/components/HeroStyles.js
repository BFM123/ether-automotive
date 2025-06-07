import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const HeroContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

export const HeroButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const HeroBanner = styled(motion.figure)`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;