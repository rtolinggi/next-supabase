import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

*,
html,
body,
button,
input {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  border-style: inherit;
  outline: 0px solid transparent;
}

*::before,
*::after {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
