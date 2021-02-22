import React from 'react';
import { Nav } from '../styled/Navbar';
import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <Nav>
      <NavLinks />
      <SideDrawer />
    </Nav>
  );
};

export default Navbar;
