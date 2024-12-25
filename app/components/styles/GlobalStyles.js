import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    font-family: "Afacad Flux", serif;
    color: white;
    background-color: #000;
    font-size: 16px;
    overflow-x: hidden;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;