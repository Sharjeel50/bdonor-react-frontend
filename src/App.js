import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/auth/Login.js"
import Register from "./components/auth/Register.js"
import Dashboard from "C:/Users/Sharjeel Jan/Desktop/bdonor-frontend/src/components/dashboard/Dashboard.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path ="/dashboard" component = {Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
