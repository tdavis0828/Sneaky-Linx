import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: scroll;
        font-family: 'Comfortaa', cursive;
        overflow: hidden;
        background: #F1F1F1;
    }
`;

export default GlobalStyles;
