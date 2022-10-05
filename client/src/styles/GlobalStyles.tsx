import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: scroll;
        font-family: 'Comfortaa', cursive;
        overflow: hidden;
        background: #171717;
    }
`;

export default GlobalStyles;
