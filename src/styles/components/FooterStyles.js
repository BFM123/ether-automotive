import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.large};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const SocialLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};

  a {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 ${({ theme }) => theme.spacing.small};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;