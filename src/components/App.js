import React, { Component } from "react";
import ReactIcon from "../images/react-icon.png";
export default class App extends Component {
    onClick = () => {
        alert("Hello World");
    };

    render() {
        return (
            <div className="app">
                <h3>Hello React- Basic project</h3>
                <img width="200" src={ReactIcon} />
                <button onClick={this.onClick}>Click here!</button>
            </div>
        );
    }
}
