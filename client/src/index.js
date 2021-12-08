import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/spm.scss";
import "./assets/css/index.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
