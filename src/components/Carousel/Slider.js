import React, { useState } from 'react';
import { StyledSlider, SliderContent } from '../styled/Carousel/Slider';
import Slide from './Slide';
import Arrow from './Arrow';

const Slider = ({ items }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === items.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: items.length - 1,
        translate: (items.length - 1) * getWidth()
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  };

  return (
    <StyledSlider>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * items.length}
      >
        {items.map((item, i) => (
          <Slide
            key={item.id}
            content={item}
            image={item.img}
            description={item.description}
          />
        ))}
      </SliderContent>
      <Arrow left handleClick={prevSlide} />
      <Arrow right handleClick={nextSlide} />
    </StyledSlider>
  );
};

export default Slider;
