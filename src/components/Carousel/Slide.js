import React from 'react';
import {
  StyledSlide,
  Image,
  ProjectDescription,
  Links
} from '../styled/Carousel/Slide';

const Slide = ({ content }) => {
  return (
    <StyledSlide>
      <Image src={content.img}></Image>
      {/*  <ProjectImage>
        <img src={project.img} alt='demo' />
      </ProjectImage> */}
      <ProjectDescription>
        <h2>{content.name}</h2>
        <Links>
          <a href={content.github} target='_blank' rel='noopener noreferrer'>
            Github
          </a>{' '}
          <span> / </span>
          <a href={content.demo} target='_blank' rel='noopener noreferrer'>
            Demo
          </a>
        </Links>
        <div>{content.description}</div>
        <p>Built with: {content['built-with']}</p>
      </ProjectDescription>
    </StyledSlide>
  );
};

export default Slide;
