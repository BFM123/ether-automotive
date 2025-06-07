import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: ${({ theme }) => theme.spacing.small};
      
      a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;