import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavLinks } from '../styled/Navbar';
import links from '../../content/navlinks.json';

const SideDrawerNavLinks = ({ open, toggleOpen }) => {
  const toggleDrawer = () => toggleOpen();

  return (
    <StyledNavLinks open={open}>
      {links.map(({ id, title, url }) => (
        <li key={id}>
          <NavLink
            exact
            to={url}
            className='navLink'
            activeStyle={{
              fontWeight: 'bold'
            }}
            onClick={toggleDrawer}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </StyledNavLinks>
  );
};

export default SideDrawerNavLinks;
