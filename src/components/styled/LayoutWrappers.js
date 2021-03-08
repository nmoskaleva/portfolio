import styled, { css } from 'styled-components';
import drawing from '../../assets/sitting-woman-sketch.jpeg';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(25px, 1fr));
  grid-template-rows: 0.5fr repeat(5, 1fr);
  width: 90%;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 7%;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 5px;
  background-color: white;
  ${(props) =>
    props.drawing &&
    css`
      background-image: url(${drawing});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top left -50px;
      @media (min-width: 769px) {
        background-position: top left 200px;
      }
    `}

  @media (min-width: 375px) {
    width: 75%;
    grid-auto-rows: 90px;
  }

  @media (min-width: 430px) {
    font-size: 0.65rem;
    max-width: 500px;
  }
  @media (min-width: 769px) {
    max-width: 600px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr repeat(3, 1.5fr);
    min-height: 75vh;
    max-height: 80hv;
    font-size: larger;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }

  > section {
    grid-column: 1/-1;
    grid-row: 2/-1;
  }
`;

export const FormSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 5px;
  max-width: 60%;
  height: 30vh;
  margin: 0 auto;
  margin-top: 15%;
  a:hover {
    font-weight: bold;
    transition: ease 0.4s;
  }
`;
