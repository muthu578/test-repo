import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/spm.scss";
import "./assets/css/index.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Entities from "./pages/Entities/Entities";
import About from "./pages/About/About";
import Sidemenu from "./components/side_menu/sideMenu";
import AppHeader from "./components/AppHeader/AppHeader";

const Routing = () => {
  return (
    <Router>
      <Sidemenu />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/entities' component={Entities} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
