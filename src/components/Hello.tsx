import React, { FC } from "react";

interface HelloProps {
    text: string;
    onClick: () => void;
}

const Hello: FC<HelloProps> = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};

export default Hello;
