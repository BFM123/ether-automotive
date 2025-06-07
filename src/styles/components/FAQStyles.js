import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FAQContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.large};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const FAQTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 2rem;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
`;

export const Question = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

export const Answer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Icon = styled.span`
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  transition: transform 0.3s ease;
  
  .material-symbols-rounded {
    font-size: 24px;
  }
`;