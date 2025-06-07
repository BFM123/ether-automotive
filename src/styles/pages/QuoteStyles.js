import styled from 'styled-components';
import { motion } from 'framer-motion';
import quoteBg from '../../assets/images/quote-bg.jpg';

export const QuoteWrapper = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight || '80px'});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.large}`};
`;

export const QuoteBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${quoteBg});
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: -1;
`;

export const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => `${theme.colors.surface}DD`};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.colors.border}80`};
`;

export const QuoteTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: ${({ theme }) => theme.colors.border};
    z-index: 0;
  }
`;

export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  flex: 1;
  
  span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ isActive, isComplete, theme }) => 
      isComplete ? theme.colors.primary : 
      isActive ? theme.colors.primary : 
      theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    border: 2px solid ${({ isActive, isComplete, theme }) => 
      isComplete || isActive ? theme.colors.primary : theme.colors.border};
    transition: all 0.3s ease;
  }
  
  p {
    color: ${({ isActive, theme }) => 
      isActive ? theme.colors.text : `${theme.colors.text}80`};
    font-size: 0.8rem;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

export const QuoteForm = styled.form`
  position: relative;
  overflow: hidden;
  min-height: 400px;
`;

export const FormSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}40`};
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}40`};
  }
  
  option {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}40`};
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.background}80`};
  }
`;

export const NextButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
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

export const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
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

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};

  .material-symbols-rounded {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;