import React, { Component } from 'react';

class Register extends Component {

  state = {
    bloodGroup: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    postcode: '',
    password: '',
    confirmPassword: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
    console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount

  render() {
    return (
      <div className="App">
      <form className="" action="index.html" method="post">
        <h1>Register</h1>
        <div className="input-field">
          <label htmlFor="bloodGroup">Blood Group</label>
          <input type="bloodGroup" id = "bloodGroup" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="firstname">Firstname</label>
          <input type="firstname" id = "firstname" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Lastname</label>
          <input type="lastname" id = "lastname" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id = "email" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="address">Address</label>
          <input type="address" id = "address" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="postcode">Postcode</label>
          <input type="postcode" id = "postcode" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id = "password" onChange = {this.onChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="confirmPassword" id = "confirmPassword" onChange = {this.onChange}/>
        </div>
        <button type="button" className="button">Register</button>
      </form>
      </div>
    );
  }
}

export default Register;
