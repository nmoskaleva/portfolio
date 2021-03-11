import styled from 'styled-components';

export const ThankYouSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  padding: 10px;
  h1 {
    font-size: 1.2rem;
    padding-bottom: 5px;
    @media (min-width: 530px) {
      font-size: 1.6rem;
    }
  }
  h1,
  a {
    background-color: white;
    padding: 5px;
  }
  a {
    color: tomato;
    @media (min-width: 430px) {
      font-size: 1.5rem;
    }
  }
`;
