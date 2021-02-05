import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 50px;
    padding-top: 50px;
    background: ${theme.backgroundColor};
    color: ${theme.textColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
