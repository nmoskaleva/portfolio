import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MainContent, Icon } from './styled/About';

const About = () => {
  return (
    <section>
      <MainContent>
        <h2>Hi! I am Natalia.</h2>
        <p>
          I am a full-stack web developer skilled in modern JavaScript, React,
          Node.js, MySQL, HTML, and CSS. I love to learn and believe in finding
          the right tools for the job, which leads me to constantly try out new
          tech.
        </p>
        <p>
          I am passionate about accessibility, performance, and user experience.
          My other great interest is art, and I am willing to collaborate with
          cultural institutions, museums and galleries, as well as non-profit
          organizations and independent creators. Feel free to check my work and
          reach out!
        </p>
        <ul>
          <li>
            <Icon
              href='https://linkedin.com/in/nmoskaleva/'
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size='2em' />
            </Icon>
          </li>
          <li>
            <Icon
              href='https://github.com/nmoskaleva'
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size='2em' />
            </Icon>
          </li>
          <li>
            <Icon
              href='mailto:nsmoskaleva@gmail.com'
              className='icon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaEnvelope size='2em' />
            </Icon>
          </li>
        </ul>
      </MainContent>
    </section>
  );
};

export default About;
