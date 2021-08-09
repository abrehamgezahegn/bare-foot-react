import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import ModalComp from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <ModalComp />
      <h1> Hello, World! </h1>
    </div>
  );
};

export default hot(module)(App);
