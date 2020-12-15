import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    html{
        @media (max-width: 1040px) {
    font-size:75%;
  }
    }
    body{
        background:#1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;
    }
    button{
        font-family: 'Inter', sans-serif;
        font-weight:bold;
        font-size:1.1rem;
        cursor:pointer;
        padding:1em 2em;
        border: 3px solid #23d997;
        background:transparent;
        color:#fff;
        transition:all 500ms ease;
        &:hover{
            background-color:#23d997;
            color:#fff;
        }
    }
    h2{
        font-weight:lighter;
        font-size:4rem;
    }
    h3{
        color:#fff;
    }
    h4{
        font-weight:bold;
        font-size:2rem;
    }
    span{
        font-weight:bold;
        color:#23d997
    }
    a{
        font-size:1.1rem;
    }
    p{
        padding:3em 0;
        color:#cccccc;
        font-size:1.4rem;
        line-height:150%;
    }
`;

export default GlobalStyle;
