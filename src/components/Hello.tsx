import React, { FC } from "react";

interface IHelloProps {
    text: string;
    onClick: () => void;
}

export const Hello: FC<IHelloProps> = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};
