import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactWrapper = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight});
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.large};
  max-width: 800px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const ContactInput = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactTextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  resize: vertical;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;