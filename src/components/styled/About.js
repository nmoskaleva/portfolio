import styled from 'styled-components';

export const MainContent = styled.div`
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  line-height: 1.1;
  color: rgb(48, 47, 47);
  @media (min-width: 769px) {
    font-size: 0.95rem;
    padding: 1rem 2rem 0.5rem;
  }
`;

export const Icon = styled.a`
  &:hover {
    color: rgb(114, 130, 123);
  }
`;
