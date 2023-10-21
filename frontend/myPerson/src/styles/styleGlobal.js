import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
      
}

body, html{
    background-color: #000000;

    ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(58, 155, 220);
    background: radial-gradient(
      circle,
      rgba(58, 155, 220, 1) 0%,
      rgba(5, 29, 64, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
   
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #e03d23;
  }

}

ul, ol, li{
    list-style: none;
}

a{
    text-decoration:none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}

`;
