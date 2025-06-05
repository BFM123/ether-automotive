import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageWrapper } from '../shared/LayoutStyles';

export const ServicesWrapper = styled(PageWrapper)``;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const ServiceCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;