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
  text-align: center;
  width: 100%;
}

ul > li {
  display: inline-block;
  padding-right: 3rem;
}

a,
a:focus,
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
`;