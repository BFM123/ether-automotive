import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
  max-width: 1200px;
  margin: auto;
`;

export const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.large} 0;
`;