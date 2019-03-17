import { createGlobalStyle } from 'styled-components';

const css = `
    body, html {
        height:100%;
        color: #333;
        font-family: Arial;
        font-size: 13px;
    }
    #root{
        height:100%;
    }
    * {
        margin: 0;
        padding: 0;
    }
    a, a:active, a:hover {
        color: #333;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
    button {
        padding: 5px 12px;
        background: white;
        border: 1px solid #ccc;
        &:hover {
            background: #ddd;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    }
`;

const GlobalStyle = createGlobalStyle`${css}`;

export { GlobalStyle };