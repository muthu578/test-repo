import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/spm.scss";
import "./assets/css/index.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Entities from "./pages/Entities/Entities";
import Sidemenu from "./components/side_menu/sideMenu";
import AppHeader from "./components/AppHeader/AppHeader";

const Routing = () => {
  return (
    <Router>
      <Sidemenu />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
