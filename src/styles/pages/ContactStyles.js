import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 800px;
  margin: 0 auto;
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
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
`;

export const ContactTextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
`;

export const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;