import styled from 'styled-components';

export const PageTitle = styled.h2`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  align-self: center;
  padding: 0.1rem 1rem;
  text-transform: uppercase;
  @media (min-width: 769px) {
    font-size: 1.1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 7px;
  @media (min-width: 769px) {
    font-size: 1rem;
  }

  &.withContent span {
    padding: 15px 10px;
    border: 2px solid rgb(33, 66, 81);
    border-radius: 5px;
    color: tomato;
    background-color: white;
    &:hover {
      color: white;
      background-color: rgb(33, 66, 81);
      border: none;
      font-size: larger;
      transition: ease-in 400ms;
    }
    @media (min-width: 769px) {
      padding: 15px;
    }
  }

  &#location {
    grid-row: 6;
    grid-column: 1;
    @media (min-width: 769px) {
      grid-row: 4;
      grid-column: 1;
    }
  }
`;
