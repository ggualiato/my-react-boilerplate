import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyle from "./styles/global";

const app = (
    <>
        <App />
        <GlobalStyle />
    </>
);

ReactDOM.render(app, document.getElementById("app"));
