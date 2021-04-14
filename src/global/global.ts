import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #0a4a1a;
    }
    
`;
