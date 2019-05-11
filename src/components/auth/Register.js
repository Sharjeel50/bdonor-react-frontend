import React, { Component } from 'react';
import { AppProvider, Button, TextField, FormLayout, Form, Checkbox } from '@shopify/polaris';
// import 'C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/css/auth/register.css';



class Register extends Component {

  state = {
    bloodGroup: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    postcode: '',
    password: '',
    confirmPassword: '',
  }

  render() {

    const {bloodGroup, firstname, lastname, email, address, postcode, password, confirmPassword, rememberMe} = this.state;

    return (
      <AppProvider>
        <Form onSubmit={this.handleSubmit}>
          <FormLayout>
              <TextField value={bloodGroup} onChange={this.handleChange('bloodGroup')} label="Blood Group" type="bloodGroup" helpText={ <span> Leave blank if unknown. </span> } />
              <TextField value={firstname} onChange={this.handleChange('firstname')} label="Firstname" type="firstname"/>
              <TextField value={lastname} onChange={this.handleChange('lastname')} label="Lastname" type="lastname"/>
              <TextField value={email} onChange={this.handleChange('email')} label="Email" type="email"/>
              <TextField value={address} onChange={this.handleChange('address')} label="Adress" type="address"/>
              <TextField value={postcode} onChange={this.handleChange('postcode')} label="Post code" type="postcode"/>
              <TextField value={password} onChange={this.handleChange('password')} label="Password" type="password"/>
              <TextField value={confirmPassword} onChange={this.handleChange('confirmPassword')} label="Confirm password" type="confirmPassword"/>
            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      </AppProvider>
    );
  }

  handleSubmit = (event) => {
    this.setState({bloodGroup: '', firstname: '', lastname: '', email: '', address: '', postcode: '', password: '', confirmPassword: '', newsletter: false});
  };

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };
}

export default Register;
