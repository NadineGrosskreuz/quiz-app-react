import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    text-align: center;
  }`;
