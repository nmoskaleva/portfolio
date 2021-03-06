import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.7rem;
  background-color: rgb(232, 229, 229);
  font-family: 'Kosugi', sans-serif;
}

ul {
  list-style: none;
}

a,
a:focus,
a:hover,
a:visited,
a:link{
  text-decoration: none;
}
`;
