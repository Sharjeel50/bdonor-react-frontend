import React, { Component } from 'react';
import { AppProvider, Button, TextField, FormLayout, Form, Checkbox } from '@shopify/polaris';
import 'C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/css/auth/login.css';



class Login extends Component {

  state = {
    firstname: '',
    email: '',
    password: '',
    rememberMe: false
  }

  render() {

    const {firstname, email, password, rememberMe} = this.state;

    return (
        <AppProvider>
          <Form onSubmit={this.handleSubmit}>
            <FormLayout>
                <TextField value={firstname} onChange={this.handleChange('firstname')} label="Firstname" type="firstname"/>
                <TextField value={email} onChange={this.handleChange('email')} label="Email" type="email"/>
                <TextField value={password} onChange={this.handleChange('password')} label="Password" type="password"/>
                <Checkbox label="Remember Me" checked={rememberMe} onChange={this.handleChange('rememberMe')} />
                <Button submit> Login </Button>
            </FormLayout>
          </Form>
        </AppProvider>
    );
  }

  handleSubmit = (event) => {
    this.setState({firstname: '', email: '', password: '', rememberMe: false});
  };

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

}

export default Login;
