import styled from 'styled-components';

export const StyledArrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40%;
  right: ${(props) => (props.left ? '40' : 0)};
  padding: 3px;
  margin: 4px;
  cursor: pointer;
  transition: transform ease-in 0.1s;
  background-color: rgba(255,255,255,0.3);
  border-radius: 15px;
  &:hover {
      transform: scale(1.1);
      background-color: white;
    } 
& svg {
border-radius: 15px;
`;
