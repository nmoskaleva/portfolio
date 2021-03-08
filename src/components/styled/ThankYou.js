import styled from 'styled-components';

export const ThankYouSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  padding: 10px;
  h1 {
    font-size: 1.1rem;
    @media (min-width: 430px) {
      font-size: 1.5rem;
    }
  }
  h1,
  a {
    background-color: white;
  }
  a {
    color: tomato;
    @media (min-width: 430px) {
      font-size: 1.5rem;
    }
  }
`;
