import styled from 'styled-components';

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  display: flex;
  width: ${(props) => props.width}px;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
`;
