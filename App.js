import React from "react";
import ReactDOM from "react-dom";

const structure = React.createElement("div", { id: "parent" }, 
                  React.createElement("div", { id: "child" }, 
                  [React.createElement("h1", {}, "Hello I am h1 tag"), React.createElement("h2", {}, "Hello I am h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(structure);

