import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(25px, 1fr));
  grid-template-rows: 0.5fr repeat(5, 1fr);
  width: 90%;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 20%;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: white;
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
    min-height: 60vh;
    max-height: 80hv;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }

  > section {
    grid-column: 1/-1;
    grid-row: 2/-1;
  }

  > div,
  > b,
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-left: 1px solid black;
    padding: 7px;
  }
`;
