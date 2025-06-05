import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../shared/LayoutStyles';

export const AboutWrapper = styled(PageWrapper)``;

export const AboutSection = styled(motion.section)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;