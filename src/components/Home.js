import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { PageTitle, Box } from './styled/Home';
import { homePageLinks } from '../data';

const Home = () => {
  const homePage = homePageLinks.map((link) =>
    link.title !== null ? (
      <Box
        as={Link}
        to={link.link}
        key={link.id}
        id={link.id}
        className='withContent'
      >
        {link.title}
      </Box>
    ) : (
      <Box key={uuidv4()}></Box>
    )
  );

  return (
    <>
      <PageTitle>Full-Stack Web Development</PageTitle>
      {homePage}
      <Box id='location' className='withContent'>
        San Diego, CA
      </Box>
    </>
  );
};

export default Home;
