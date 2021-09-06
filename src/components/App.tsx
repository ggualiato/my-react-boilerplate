import React, { FC, useEffect } from "react";
import ReactIcon from "../images/react-icon.png";
import Logo from "../images/logo.svg";
import { sum } from "../utils/utils";
import { Hello } from "./Hello";
import { sayHello } from "../utils/hello";
import { getTodo, getTodos } from "../services/todos";

const App: FC = () => {
    useEffect(() => {
        getTodos();
        getTodo(1);
    }, []);

    const onClick = () => {
        alert(sayHello(" World") + sum(2, 3));
    };

    return (
        <div className="app">
            <h3>Hello React- Basic project</h3>
            <div>
                <div className="image-wrapper">
                    PNG
                    <img width="200" src={ReactIcon} />
                </div>
                <div className="image-wrapper">
                    SVG
                    <a href="#" onClick={() => console.log("clicked")}>
                        <img width="200" src={Logo} />
                    </a>
                </div>
                <Hello onClick={onClick} text="Click here!" />
            </div>
        </div>
    );
};

export { App };
