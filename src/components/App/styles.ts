import styled from "styled-components";

export const AppContainer = styled.div`
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
    text-align: center;
    div {
        display: flex;
        button {
            height: fit-content;
        }
    }
`;

export const ImageWrapper = styled.div`
    width: min-content;
`;

export const Button = styled.button`
    color: blue;
`;
