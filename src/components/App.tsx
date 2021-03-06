import React, { FC } from "react";
import ReactIcon from "../images/react-icon.png";
import Logo from "../images/logo.svg";
import { sum } from "../utils/utils";
import { Hello } from "./Hello";

const App: FC = () => {
    const onClick = () => {
        alert("Hello World " + sum(2, 3));
    };

    return (
        <div className="app">
            <h3>Hello React- Basic project</h3>
            <div style={{ border: "solid black 1px" }}>
                PNG
                <img width="200" src={ReactIcon} />
            </div>
            <div style={{ border: "solid black 1px" }}>
                SVG
                <a href="#" onClick={() => console.log("clicked")}>
                    <img width="200" src={Logo} />
                </a>
            </div>
            <Hello onClick={onClick} text="Click here!" />
        </div>
    );
};

export { App };
