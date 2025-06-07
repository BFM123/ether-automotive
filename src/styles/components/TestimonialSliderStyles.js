import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.surface};
`;

export const TestimonialWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 200px;
  position: relative;
`;

export const Testimonial = styled(motion.div)`
  text-align: center;
  
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.large};
    line-height: 1.6;
    font-style: italic;
  }
`;

export const ClientInfo = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
  
  span {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const NavButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;