import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Afacad Flux", serif;
    color: white;
    background-color: #000;
    font-size: 16px;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;