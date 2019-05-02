import React, { Component } from 'react';

class Login extends Component {

  state = {
    firstname: '',
    email: '',
    password: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
    console.log(this.state);

  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form className="" onSubmit = {this.onSubmit} method="post">
          <h1>Login</h1>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input type="firstname" id = "firstname" onChange = {this.onChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id = "email" onChange = {this.onChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id = "password" onChange = {this.onChange}/>
          </div>
          <div className = "input-field">
            <button type="button" className="button">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
