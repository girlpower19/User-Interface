import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const PasswordForgetPage = () => (
  <div>
    
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const sideImg = require("./w1.jpg");
    const logo = require("./w4.png");

    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <div>
        <MDBContainer style={{alignitems:'center'}} className="mobilepage">
        <MDBCard>
        <MDBCardBody>
        <MDBRow>
        <br />
        <MDBCol>
      <form onSubmit={this.onSubmit} style={{marginTop:"25%"}}>
      <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <p className="h2 text-center mb-6  ">Forget Password</p>
        <MDBInput
          name="email"
          value={this.state.email}
          label="Enter your email..."
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <center>
        <MDBBtn disabled={isInvalid} type="submit" color="light-blue" className="mb-3 blue-gradient">
          Forget Password
        </MDBBtn>
        </center>
        <br/>
        <br/>
        {error && <p>{error.message}</p>}
      </form>
      </MDBCol>
      </MDBRow>
        </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <MDBContainer style={{alignitems:'center'}} className="webpage">
      <MDBRow>
      <br />
            <MDBCol md="6">
            <img src={sideImg} alt="" className="bg" />
            </MDBCol>
        <MDBCol md="6">
      <form onSubmit={this.onSubmit} style={{marginTop:"25%"}}>
      <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <p className="h2 text-center mb-6  ">Forget Password</p>
        <MDBInput
          name="email"
          value={this.state.email}
          label="Enter your email..."
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <center>
        <MDBBtn disabled={isInvalid} type="submit" color="light-blue" className="mb-3 blue-gradient">
          Forget Password
        </MDBBtn>
        </center>
        <br/>
        <br/>
        {error && <p>{error.message}</p>}
      </form>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };