import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { PageTitle, Box } from './styled/Home';
import { homePageLinks } from '../content/data';

const Home = () => {
  const homePage = homePageLinks.map((link) =>
    link.title !== null ? (
      <Box key={link.id} id={link.id} className='withContent'>
        <Link to={link.link}>{link.title}</Link>
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
