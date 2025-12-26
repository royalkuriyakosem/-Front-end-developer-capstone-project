import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-green: #495E57;
    --primary-yellow: #F4CE14;
    --secondary-orange: #EE9972;
    --secondary-peach: #FBDABB;
    --highlight-grey: #EDEFEE;
    --highlight-black: #333333;
    
    --font-heading: 'Markazi Text', serif;
    --font-body: 'Karla', sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: var(--highlight-black);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
