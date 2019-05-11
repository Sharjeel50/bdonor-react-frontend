import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DateComponent from 'C:/Users/Sharjeel Jan/Desktop/bdonor-frontend/src/components/dashboard/dateComponent.js';

class Dashboard extends Component {

  state = {
    isLoading: true,
    User: []
  }

  
  render() {

    return (
      <div className="App">
        <DateComponent/>
      </div>
    );
  }
}

export default Dashboard;
