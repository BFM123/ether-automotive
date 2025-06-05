import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../shared/LayoutStyles';

export const HomeWrapper = styled(PageWrapper)`
  padding: 0;
`;

export const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.background}, 
    ${({ theme }) => theme.colors.surface}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;