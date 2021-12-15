import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "../src/main.css"; // or 'antd/dist/antd.less'import Login from "../src/pages/Login/Login";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Login from "../src/pages/Login/Login";

import Sidemenu from "./components/side_menu/sideMenu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <ProtectedRoute path='/dashboard'>
          <Router>
            <Sidemenu />
          </Router>
        </ProtectedRoute>
        <Route exact path='/'>
          <Redirect exact from='/' to='dashboard' component={Dashboard} />
        </Route>
        <Route path='*'>
          <Redirect from='/' to='dashboard' />
        </Route>
      </Switch>
    </Router>
  );
}
