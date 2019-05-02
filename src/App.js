import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/auth/LoginForm.js"
import Register from "./components/auth/Register.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/register" component = {Register}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
