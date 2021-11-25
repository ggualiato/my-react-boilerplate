import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

export default createGlobalStyle`
    ${normalize}

    body {
        background-color: ${colors.green};
    }
`;
