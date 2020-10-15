import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/icon.png';
import './css/styles.css';

const HelloWorld = (props) => {
    return (
        <div>
            <img src={logo} alt="Logo"/>
            <h1>{props.title}</h1>
        </div>
    )
};

ReactDOM.render(
    <HelloWorld title="Hello World"/>,
    document.getElementById("container")
);