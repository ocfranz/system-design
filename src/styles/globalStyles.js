import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
const GlobalStyles = createGlobalStyle`
    body, html{
        margin :0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }
    *{
        box-sizing: border-box;
        font-family: 'Overpass', sans-serif;
    }

    body{
        color : ${colors.darK};
    }
      
`;
export default GlobalStyles;
