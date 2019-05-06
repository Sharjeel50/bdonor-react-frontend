import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Dashboard extends Component {

  state = {
    isLoading: true,
    User: []
  }

  async componentDidMount() {
    const getAll = await fetch('/getAll');
    const body = await getAll.json();
    this.setState({User: body, isLoading: false});
  }

  render() {

    

    return (
      <div className="App">
      </div>
    );
  }
}

export default Dashboard;
