import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        font-family:serif;
        background-color: ${(props) => props.theme.bgColor};
    };
    a{
       text-decoration: none;
    }
    

`;

export default GlobalStyle;
