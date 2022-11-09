import React, { FC, useEffect } from "react";
import Logo from "../../images/logo.svg";
import ReactIcon from "../../images/react-icon.png";
import Hello from "../Hello/Hello";
import { getTodo, getTodos } from "./../../services/todos";
import { sayHello } from "./../../utils/hello";
import { sum } from "./../../utils/sum";
import { AppContainer, Button, ImageWrapper } from "./styles";

const App: FC = () => {
    useEffect(() => {
        getTodos();
        getTodo(1);
    }, []);

    const onClick = () => {
        alert(sayHello(" World ") + sum(2, 3));
    };

    return (
        <AppContainer>
            <h3>Hello React- Basic project</h3>
            <div>
                <ImageWrapper>
                    PNG
                    <img width="200" src={ReactIcon} />
                </ImageWrapper>
                <ImageWrapper>
                    SVG
                    <a href="#" onClick={() => console.log("clicked")}>
                        <img width="200" src={Logo} />
                    </a>
                </ImageWrapper>
                <Hello onClick={onClick} text="Click here!" />
                <Button onClick={() => console.log("Hello World")}>Print Hello World</Button>
            </div>
        </AppContainer>
    );
};

export default App;
