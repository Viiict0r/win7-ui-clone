import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'SegoeUI';
      src: url('/fonts/segoe-ui.ttf');
  }

  html {
    cursor: url('/cursors/default.cur'), auto;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    user-select: none;
  }

  #__next {
    height: 100%;
    width: 100%;

  }

  .selection-area {
    background: rgba(46, 115, 252, 0.2);
    border: 1px solid rgba(98, 155, 255, 0.81);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SegoeUI';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
