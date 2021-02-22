import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageTitle, LargeScreenNavbar } from '../styled/Navbar';
import links from '../../navlinks.json';

const LargeScreenNav = () => {
  return (
    <>
      {links.map(({ title, url }) => (
        <PageTitle key={title}>
          <NavLink
            exact
            to={url}
            className='navLink'
            activeStyle={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              display: 'inline',
              cursor: 'initial'
            }}
          >
            {title}
          </NavLink>
        </PageTitle>
      ))}

      <LargeScreenNavbar>
        {links.map(({ id, title, url }) => (
          <li key={id}>
            <NavLink
              exact
              to={url}
              className='navLink'
              activeStyle={{
                fontWeight: 'bold'
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </LargeScreenNavbar>
    </>
  );
};

export default LargeScreenNav;
