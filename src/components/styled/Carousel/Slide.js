import styled from 'styled-components';

export const StyledSlide = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
width: 90%;
padding-top: 3px;
margin-top: -5px;
height: 35vh;
object-fit: cover;
object-position: top left;
@media (min-width: 769px) {
  width: 73%;
  max-height: 28vh;
`;

export const ProjectDescription = styled.div`
  width: 90%;
  margin-top: -5px;
  max-height: 35vh;
  padding: 2px 10px 2px 10px;
  text-align: left;
  margin: 0;
  align-self: center;
  > h2 {
    font-size: larger;
  }
  @media (min-width: 375px) {
    width: 75%;
    grid-auto-rows: 90px;
  }
  @media (min-width: 430px) {
    max-width: 500px;
    font-size: 0.8rem;
  }
  @media (min-width: 769px) {
    max-width: 600px;
    max-height: 35vh;
    font-size: 1rem;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }
`;

export const Links = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
  > a {
    color: rgb(114, 130, 123);
    font-weight: bold;
  }
  > a:hover {
    color: rgb(114, 130, 123);
    text-decoration: underline;
  }
`;
