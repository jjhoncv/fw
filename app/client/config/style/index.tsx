import { createGlobalStyle } from 'styled-components';

const css = `
    body, html {
        height:100%;
    }
    #root{
        height:100%;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

const GlobalStyle = createGlobalStyle`${css}`;

export { GlobalStyle };