import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle ` //esse createGlobalStyle é uma função do styled components q cria um estilo global para a aplicação
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased; //faz a fonte ficar mais nítica em alguns browsers
    }
    body, input, textarea, button { //esses três últimos n importam a fonte do html por padrão, então precisa definir
        font-family: 'Poppins', sans-serif;
        font-weight: 400; //o padrão é 500
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600; //colocando as tags de negrito no peso bold
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`