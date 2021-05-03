import { createGlobalStyle } from 'styled-components';

// Como estou usando o pacote Styled Components, usei uma de suas funções
// para criar um estilo global. Os demais estilos são "scoped", ou seja,
// aplicados apenas a seu devido arquivo.
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #43475a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  main {
    height: 100%;
    padding-bottom: 5rem;
  }

  button {
    cursor: pointer;
  }

  .CardGroup {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const COLORS = {
  backgroundDarker: '#262833',
  backgroundMid: '#43475a',
  backgroundLighter: '#606581',
  buttonPrimary: '#d87428',
  buttonAdd: '#4acfac',
  buttonRemove: '#ffa48e',
  buttonDelete: '#bd4d32',
  textPrimary: '#ddd8cb',
};

export const SIZES = {
  pixel14: 0.875 + 'rem',
  pixel16: 1 + 'rem',
  pixel18: 1.125 + 'rem',
  pixel20: 1.25 + 'rem',
  pixel24: 1.5 + 'rem',
  pixel26: 1.625 + 'rem',
  pixel32: 2 + 'rem',
};
