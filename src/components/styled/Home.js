import styled from 'styled-components';

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

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding: 7px;

  &.withContent {
    background-color: white;
  }

  &#location {
    grid-row: 6;
    grid-column: 1;
    @media (min-width: 769px) {
      grid-row: 4;
      grid-column: 1;
    }
  }

  ${
    '' /* &#year {
    grid-row: -1;
    grid-column: -1;
    font-size: 2rem;
  } */
  }
`;
