import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServiceDetailsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ServiceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 1.8rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  line-height: 1.6;
`;

export const PriceTag = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: 4px;
  font-weight: bold;
`;