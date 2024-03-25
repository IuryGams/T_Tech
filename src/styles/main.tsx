"use client";
import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #D10024;
    --secondary-color: #E4E7ED;
    --button-color: #ef233c;
    --background-color: #15161D;
    --text-primary-color: #2B2D42;
    --subtext-color: #8D99AE;
  }


  *{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  body {
    background: white;
    min-height: 100dvh;
  }
`;
 
export default GlobalStyle;