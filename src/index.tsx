import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import GlobalStyle from "./styles/global";

const app = (
    <>
        <App />
        <GlobalStyle />
    </>
);

const container = document.getElementById("app");
const root = createRoot(container);

root.render(app);
