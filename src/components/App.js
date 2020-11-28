import React from "react";
import ReactIcon from "../images/react-icon.png";

const App = () => {
    const onClick = () => {
        alert("Hello World ");
    };

    return (
        <div className="app">
            <h3>Hello React- Basic project</h3>
            <img width="200" src={ReactIcon} />
            <button onClick={onClick}>Click here!</button>
        </div>
    );
};

export { App };
