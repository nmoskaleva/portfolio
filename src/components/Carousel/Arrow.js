import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { StyledArrow } from '../styled/Carousel/Arrow';

const Arrow = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <StyledArrow right>{<BsChevronRight size='2em' />}</StyledArrow>
      <StyledArrow left>{<BsChevronLeft size='2em' />}</StyledArrow>
    </div>
  );
};

export default Arrow;
