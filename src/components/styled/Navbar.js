import styled from 'styled-components';

export const Nav = styled.nav`
   {
    grid-column: 1/-1;
    grid-row: 1/2;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 65px;
    padding: 0 20px;
    font-size: 0.9rem;
    font-family: 'Montserrat Subrayada', sans-serif;
  }
  @media (min-width: 769px) {
    display: block;
  }
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;

export const StyledHamburgerIcon = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  @media (min-width: 769px) {
    display: none;
  }
  > div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'whitesmoke' : 'black')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledNavLinks = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 200px;
  padding: 3.5rem 0 3.5rem 1rem;
  background-color: black;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  list-style: none;
  li {
    padding: 1.5rem;
  }
  li a {
    color: white;
  }
  @media (min-width: 769px) {
    display: none;
    z-index: 0;
  }
`;

// large screen navbar
export const PageTitle = styled.h1`
  padding-top: 15px;
  font-size: 1.1rem;
  a {
    display: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const LargeScreenNavbar = styled.ul`
  justify-content: space-around;
  align-items: center;
  display: none;
  .navLink:hover {
    font-weight: bold;
  }
  @media (min-width: 769px) {
    display: flex;
  }
`;
