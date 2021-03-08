import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SkillDiv from './styled/Skills';
import { skills } from '../content/data';

const Skills = ({ numBoxes = 15 }) => {
  const skillsList = skills.map((skill) => (
    <SkillDiv key={skill}>{skill}</SkillDiv>
  ));

  const emptyBoxes = new Array(numBoxes - skills.length).fill('');

  const boxes = emptyBoxes.map((box) => (
    <SkillDiv key={uuidv4()}>{box}</SkillDiv>
  ));

  return (
    <>
      {skillsList}
      {emptyBoxes.length > 0 && boxes}
    </>
  );
};

export default Skills;
