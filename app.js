/*
Create below HTML structure using React:

<div id="parent">
    <div id="child1">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
    </div>
</div>
*/
import React from "react";
import * as ReactDOM from 'react-dom/client';

const parent = React.createElement("div", {id : "parent"},
    [
        React.createElement("div", { id: "child1"},
        [
            React.createElement("h1", {}, "I'm H1 Tag"),
            React.createElement("h2", {}, "I'm H2 Tag")
        ]),
        React.createElement("div", { id: "child2"},
            [
                React.createElement("h1", {}, "I'm H1 Tag"),
                React.createElement("h2", {}, "I'm H2 Tag")
        ]),
    ]
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);