import React, { Component } from 'react';
import { AppProvider, DatePicker } from '@shopify/polaris';


class DatePickerComponent extends Component {
  state = {
    month: 1,
    year: 2018,
    selected: {
      start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
      end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    },
  };

  render() {
    const {month, year, selected} = this.state;

    return (
      <AppProvider>
        <DatePicker month={month} year={year} onChange={this.handleChange} onMonthChange={this.handleMonthChange} selected={selected}/>
      </AppProvider>
    );
  }

  handleChange = (value) => {
    this.setState({selected: value});
  };

  handleMonthChange = (month, year) => {
    this.setState({
      month,
      year,
    });
  };
}

export default DatePickerComponent;
