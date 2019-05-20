import React, { Component } from "react";
import {
  Card,
  AppProvider,
  Button,
  TextField,
  FormLayout,
  Form,
  Checkbox,
  Layout
} from "@shopify/polaris";
import axios from "axios";
// import 'C:/Users/Sharjeel Jan/Desktop/bdonor-react-frontend/src/css/auth/login.css';

class Login extends Component {
  state = {
    firstname: "",
    email: "",
    password: "",
    rememberMe: false
  };

  render() {
    const { firstname, email, password, rememberMe } = this.state;

    return (
      <AppProvider>
        <Layout>
          <Layout.AnnotatedSection
            title="BDonor"
            description="
              This project is based on advancing the current health system in the UK by creating a blood donation tracker that allows the community to share their blood group/types
                  (confidentiality using a unqiue identification) for the NHS to filter and search for in case of an emergency"
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={firstname}
                    onChange={this.handleChange("firstname")}
                    label="Firstname"
                    type="firstname"
                  />
                  <TextField
                    value={email}
                    onChange={this.handleChange("email")}
                    label="Email"
                    type="email"
                  />
                  <TextField
                    value={password}
                    onChange={this.handleChange("password")}
                    label="Password"
                    type="password"
                  />
                  <Checkbox
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={this.handleChange("rememberMe")}
                  />
                  <Button submit> Login </Button>
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
      firstname: "",
      email: "",
      password: "",
      rememberMe: false
    });

    var UserLogin = {
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .get(
        "http://localhost:8020/login/${UserLogin.firstname}/${UserLogin.email}/${UserLogin.password}"
      )
      .then(res => {
        console.log(res);
      });
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };
}

export default Login;
