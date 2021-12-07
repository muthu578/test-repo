import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "../src/main.css"; // or 'antd/dist/antd.less'

import Login from "../src/pages/Login/Login";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
