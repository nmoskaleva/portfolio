import styled from 'styled-components';

export const Page = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  transition: opacity 500ms ease-in-out;

  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
  }

  .page-exit {
    opacity: 1;
  }

  .page-exit-active {
    opacity: 0;
    transition: opacity 0.5s;
  }

  .page-exit-done {
    opacity: 0;
  }
`;
