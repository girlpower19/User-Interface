import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { PasswordForgetLink } from "../PasswordForget";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

//mdb
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBModalFooter,
  MDBBtn
} from "mdbreact";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    const sideImg = require("./w1.jpg");
    const logo = require("./w4.png");

    return (
      <MDBContainer>
        <MDBRow>
          <br />
          <div class="d-flex justify-content-center">
            <MDBCol md="5">
              <img src={sideImg} alt="" className="bg" />
            </MDBCol>
            <MDBCol md="4">
              <form onSubmit={this.onSubmit}>
                <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <p className="h2 text-center mb-6">SignIn</p>
                <div>
                  <MDBInput
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    label="Email Address"
                    icon="envelope"
                  />

                  <MDBInput
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    label="Password"
                    icon="lock"
                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    disabled={isInvalid}
                    type="submit"
                    color="light-blue"
                    className="mb-3 blue-gradient"
                  >
                    Sign In
                  </MDBBtn>
                </div>
                <div>{error && <p>{error.message}</p>}</div>

                <MDBModalFooter className="font-weight-light d-flex justify-content-center">
                  <div>
                    <p></p>
                    <p>{<PasswordForgetLink />}</p>
                  </div>
                </MDBModalFooter>
              </form>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
