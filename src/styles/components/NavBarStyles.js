import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;