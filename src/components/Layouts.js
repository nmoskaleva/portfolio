import React from 'react';
import { MainWrapper, FormSuccessWrapper } from './styled/LayoutWrappers';
import { Page } from './styled/Page';
import Navbar from './Nav/Navbar';

const PlainLayout = ({ children }) => {
  return (
    <Page>
      <MainWrapper>
        <Navbar />
        {children}
      </MainWrapper>
    </Page>
  );
};

const PatternedLayout = ({ children }) => {
  return (
    <Page>
      <MainWrapper drawing>
        <Navbar />
        {children}
      </MainWrapper>
    </Page>
  );
};

const HomeLayout = ({ children }) => {
  return (
    <Page>
      <MainWrapper drawing>{children}</MainWrapper>
    </Page>
  );
};

const ThankYouLayout = ({ children }) => {
  return (
    <Page>
      <FormSuccessWrapper>{children}</FormSuccessWrapper>
    </Page>
  );
};

export { HomeLayout, PatternedLayout, PlainLayout, ThankYouLayout };
