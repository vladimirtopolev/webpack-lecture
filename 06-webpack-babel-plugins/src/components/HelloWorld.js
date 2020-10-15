import React from 'react';
import logo from "../images/icon.png";

export const HelloWorld = (props) => {
    return (
        <div>
            <img src={logo} alt="Logo"/>
            <h1>{props.title}</h1>
        </div>
    )
};