import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: #000;
    }
`;