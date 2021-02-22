import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  grid-column: 1/-1;
  grid-row: 2/6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FormFields = styled.div`
  margin: 0 auto;
  width: 90%;
  label {
    display: block;
    width: 90%;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    font-size: 0.7rem;
    outline: none;
    margin: 0.6rem 1rem;
  }
  input[type='text'],
  input[type='email'],
  select,
  textarea {
    display: block;
    width: 90%;
    height: 2rem;
    border: solid 1px;
    color: inherit;
    outline: 0;
    padding: 0 0.5rem;
    margin: 0 auto;
  }
  textarea {
    resize: none;
    padding: 0.5rem;
    height: 6rem;
  }
  @media (min-width: 769px) {
    input[type='text'],
    input[type='email'],
    select,
    textarea {
      width: 95%;
    }
    label {
      font-size: 0.75rem;
    }
`;

export const FormButton = styled.button`
  width: 85%;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  font-weight: bold;
  font-size: 0.6rem;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  background-color: black;
  color: white;
  outline: none;
  &:hover {
    font-weight: bold;
    background-color: rgb(231, 231, 231);
    color: black;
  }
  @media (min-width: 769px) {
    font-size: 0.75rem;
  }
`;
