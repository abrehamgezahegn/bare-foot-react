import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// ReactDOM.render(<App />, document.getElementById("root"));

const div = document.createElement("div");
div.setAttribute("id", "react");
document.body.append(div);

ReactDOM.render(<App />, document.getElementById("react"));
