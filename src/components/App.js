import React, { Component } from "react";

export default class App extends Component {
    onClick = () => {
        alert("Hello World");
    };

    render() {
        return (
            <div className="app">
                <h3>Hello React- Basic project</h3>
                <button onClick={this.onClick}>Click here!</button>
            </div>
        );
    }
}
