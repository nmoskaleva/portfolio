import styled, { css } from 'styled-components';
import drawing from '../../images/drawing_umecker.jpeg';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(25px, 1fr));
  grid-template-rows: 0.5fr repeat(5, 1fr);
  width: 90%;
  min-height: 82vh;
  margin: 0 auto;
  margin-top: 20%;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: white;
  ${(props) =>
    props.drawing &&
    css`
      background-image: url(${drawing});
      background-size: cover;
      background-position: left;
    `}

  > a:hover {
    background-color: white;
    color: black;
    transition: ease-in 300ms;
  }

  @media (min-width: 375px) {
    width: 75%;
    grid-auto-rows: 90px;
  }
  @media (min-width: 430px) {
    margin-top: 15%;
    font-size: 0.65rem;
    max-width: 500px;
  }
  @media (min-width: 769px) {
    max-width: 600px;
    margin-top: 7%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr repeat(3, 1.5fr);
    font-size: larger;
    min-height: 75vh;
    max-height: 80hv;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }

  > section {
    grid-column: 1/-1;
    grid-row: 2/-1;
  }
`;
