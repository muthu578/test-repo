import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sidemenu from "./components/side_menu/sideMenu";

const Routing = () => {
  return (
    <Router>
      <Sidemenu />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/home' component={Home} />
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
