import React from 'react';
import { MainWrapper } from './styled/MainWrapper';
import Navbar from './Nav/Navbar';

const LayoutWithNav = ({ children }) => {
  return (
    <MainWrapper>
      <Navbar />
      {children}
    </MainWrapper>
  );
};

const HomeLayout = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export { LayoutWithNav, HomeLayout };
