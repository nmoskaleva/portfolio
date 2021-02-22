import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h2`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  align-self: center;
  padding: 0.1rem 0.7rem;
  font-size: 0.8rem;
  font-family: 'Montserrat Subrayada', sans-serif;
  @media (min-width: 769px) {
    font-size: 0.95rem;
  }
`;

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

export const StyledLink = styled(Link)`
  &:hover,
  &a:hover {
    background-color: rgb(231, 231, 231);
  }
`;

export const LocationDiv = styled.div`
  grid-row: 6;
  grid-column: 1;
  @media (min-width: 769px) {
    grid-row: 4;
    grid-column: 1;
  }
`;
