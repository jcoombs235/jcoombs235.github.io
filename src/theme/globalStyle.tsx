import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${theme.backgroundColor};
    color: ${theme.textColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  label {
    font-weight: bold;
    display: flex;
  }

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: black;
    border: 2px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    line-height: initial;
    transition: background-color 200ms ease-in-out, border 200ms ease-in-out,
      transform 200ms ease-in-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  @media (hover: hover) {
    input[type="submit"]:hover,
    input[type="reset"]:hover,
    input[type="button"]:hover,
    button:hover {
      cursor: pointer;
      border-color: red;
    }
  }

  button:focus-visible,
  input[type="submit"]:focus-visible,
  input[type="reset"]:focus-visible,
  input[type="button"]:focus-visible {
    border-color: red;
    outline: none;
  }

  input[type="email"],
  input[type="text"],
  input[type="number"] {
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid white;
    background-color: black;
    color: white;
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="email"],
  input[type="text"],
  input[type="number"],
  textarea,
  select {
    width: 150px;
    margin: 5px 0;
    margin-right: 10px;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border: 2px solid red;
  }

  input:invalid,
  select:invalid,
  textarea:invalid {
    border: 2px solid #ff7d87;
    box-shadow: none;
  }
`;

export default GlobalStyle;
