import styled from 'styled-components';

export const ProjectImage = styled.div`
  > img{
  width: 100%;
  padding-top: 3px;
  margin-top: -5px;
  height: 35vh;
  object-fit: cover;
  object-position: top left;
  }
  @media (min-width: 769px) {
  > img {
    max-height: 28vh;
  }
  `;

export const ProjectDescription = styled.div`
  width: 100%;
  padding-top: 3px;
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  max-height: 35vh;
  padding: 2px 6px;
  text-align: left;
  margin: 0;
  align-self: center;
  > h2 {
    font-size: larger;
  }
  @media (min-width: 430px) {
    font-size: 0.8rem;
  }
  @media (min-width: 769px) {
    max-height: 35vh;
    font-size: 1rem;
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
