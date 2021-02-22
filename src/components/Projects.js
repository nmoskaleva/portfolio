import React from 'react';
import Carousel from 'react-grid-carousel';
import { ProjectImage, ProjectDescription, Links } from './styled/Projects';
import { projects } from '../data.js';

const Projects = () => {
  return (
    <section>
      <Carousel
        cols={1}
        rows={1}
        gap={40}
        loop
        mobileBreakpoint={530}
        containerStyle={{ maxWidth: '1200px', margin: '0 auto' }}
        responsiveLayout={[
          {
            breakpoint: 350,
            gap: 25
          },
          {
            breakpoint: 410,
            gap: 30
          },
          {
            breakpoint: 480,
            gap: 35
          }
        ]}
      >
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <ProjectImage>
              <img src={project.img} alt='demo' />
            </ProjectImage>

            <ProjectDescription>
              <h2>{project.name}</h2>
              <Links>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>{' '}
                <span> / </span>
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Demo
                </a>
              </Links>
              <div>{project.description}</div>
              <p>Built with: {project['built-with']}</p>
            </ProjectDescription>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
