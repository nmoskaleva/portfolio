import React, { useState } from 'react';
import SideDrawerNavLinks from './SideDrawerNavLinks';
import { StyledHamburgerIcon } from '../styled/Navbar';

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledHamburgerIcon open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </StyledHamburgerIcon>
      <SideDrawerNavLinks open={open} toggleOpen={toggleOpen} />
    </>
  );
};

export default SideDrawer;
