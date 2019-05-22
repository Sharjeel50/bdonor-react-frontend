import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class DonorChart extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], // Days of the current month, will need to change. Or can be done monthly
        datasets: [
          {
          label: "Ealing Hospital",
          backgroundColor: "rgba(0,255,0,0.75)",
          data: [10,20,30,50,60,80,100,124,130,135,140, 210]
          },
          {
          label: "Stanmore Hospital",
          backgroundColor: "rgba(255,0,255,0.75)",
          data: [20,161,190,220,255,300,340,410,326,311,403, 255]
          }
      ]
    }
  }
}

  render(){
    return (
      <Line
        options = {{
          responsive: true
        }}
        data = {this.state.data}
      />
    )
  }
}

export default DonorChart;

// Will need to get all donations made from main app class or make a api call
