import React, { FC } from "react";

interface HelloProps {
    text: string;
    onClick: () => void;
}

export const Hello: FC<HelloProps> = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};
