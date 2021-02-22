import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledLink, LocationDiv, PageTitle } from './styled/Home';
import { homePageLinks } from '../data';

const Home = () => {
  const homePage = homePageLinks.map((link) =>
    link.title !== null ? (
      <StyledLink to={link.link} key={link.id} id={link.id}>
        <div>{link.title}</div>
      </StyledLink>
    ) : (
      <b key={uuidv4()}></b>
    )
  );

  return (
    <>
      <PageTitle>Full-Stack Web Development</PageTitle>
      {homePage}
      <LocationDiv>San Diego, CA</LocationDiv>
    </>
  );
};

export default Home;
