import React, { Component } from "react";
import {
  AppProvider,
  Button,
  TextField,
  FormLayout,
  Form,
  Checkbox,
  Layout,
  Card
} from "@shopify/polaris";
// import 'C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/css/auth/register.css';
import axios from "axios";

class Register extends Component {
  state = {
    bloodGroup: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    postcode: "",
    password: "",
    confirmPassword: ""
  };

  render() {
    const {
      bloodGroup,
      firstname,
      lastname,
      email,
      address,
      postcode,
      password,
      confirmPassword,
      rememberMe
    } = this.state;

    return (
      <AppProvider>
        <Layout>
          <Layout.AnnotatedSection
            title="BDonor"
            description="
            This project is based on advancing the current health system in the UK by creating a blood donation tracker that allows the community to share their blood group/types
                (confidentiality using a unqiue identification) for the NHS to filter and search for in case of an emergency"
          >
            <Card>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={bloodGroup}
                    onChange={this.handleChange("bloodGroup")}
                    label="Blood Group"
                    type="bloodGroup"
                    helpText={<span> Leave blank if unknown. </span>}
                  />
                  <TextField
                    value={firstname}
                    onChange={this.handleChange("firstname")}
                    label="Firstname"
                    type="firstname"
                  />
                  <TextField
                    value={lastname}
                    onChange={this.handleChange("lastname")}
                    label="Lastname"
                    type="lastname"
                  />
                  <TextField
                    value={email}
                    onChange={this.handleChange("email")}
                    label="Email"
                    type="email"
                  />
                  <TextField
                    value={address}
                    onChange={this.handleChange("address")}
                    label="Adress"
                    type="address"
                  />
                  <TextField
                    value={postcode}
                    onChange={this.handleChange("postcode")}
                    label="Post code"
                    type="postcode"
                  />
                  <TextField
                    value={password}
                    onChange={this.handleChange("password")}
                    label="Password"
                    type="password"
                  />
                  <TextField
                    value={confirmPassword}
                    onChange={this.handleChange("confirmPassword")}
                    label="Confirm password"
                    type="confirmPassword"
                  />
                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </AppProvider>
    );
  }

  handleSubmit = event => {
    this.setState({
      bloodGroup: "",
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      postcode: "",
      password: "",
      confirmPassword: ""
    });

    let User = {
      bloodGroup: this.state.bloodGroup,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      postcode: this.state.postcode,
      password: this.state.password
    };

    axios.post(
      "http://localhost:8020/create/${User.bloodGroup}/${User.firstname}/${User.lastname}/${User.email}/${User.password}/${User.address}/${User.postcode}"
    );

    this.handleChange = field => {
      return value => this.setState({ [field]: value });
    };
  };
}

export default Register;
