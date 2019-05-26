import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/auth/Login.js"
import Register from "./components/auth/Register.js"
import Dashboard from "C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/components/dashboard/Dashboard.js"
import TopNavBar from "C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/components/layout/TopBar.js";
import tmp from "C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/components/dashboard/tmp_dashboard.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavBar/>
          <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/tmp" component = {tmp}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path ="/dashboard" component = {Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
