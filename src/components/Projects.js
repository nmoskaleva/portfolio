import React from 'react';
import Slider from './Carousel/Slider';
import { projects } from '../data';

const Projects = () => {
  return (
    <>
      <section>
        <Slider items={projects} />
      </section>
    </>
  );
};

export default Projects;
