import { createGlobalStyle } from "styled-components";
import { backgroundColor, Colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.backgroundColor};
    color: ${Colors.textColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
