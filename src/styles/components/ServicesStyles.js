import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const ServicesList = styled.ul`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  list-style: none;
`;

export const ServiceCard = styled(motion.li)`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ServiceIcon = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ServiceBanner = styled(motion.li)`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;