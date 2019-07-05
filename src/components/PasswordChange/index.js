import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
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

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
      const sideImg = require("./w1.jpg");
        const logo = require("./w4.png");

    return (
      <div>
         <MDBContainer className="mobilepage">
      <MDBRow>
        <br />
        <div class="d-flex justify-content-center"></div>
        
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
      <form onSubmit={this.onSubmit} style={{marginTop:"25%"}}>
      <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <br/>
                <p className="h4 text-center mb-6  ">Change Password</p>

        <MDBInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          label="New Password"
          placeholder="New Password"
        />
        <MDBInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          label="Confirm new password"
          placeholder="Confirm New Password"
        />
        <center>
        <MDBBtn disabled={isInvalid} type="submit" color="light-blue" className="mb-3 blue-gradient">
          Reset My Password
        </MDBBtn>
        {error && <p>{error.message}</p>}
        </center>
      </form>
      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
      <MDBContainer className="webpage">
      <MDBRow>
        <br />
        <div class="d-flex justify-content-center"></div>
        <MDBCol md="6">
            <img src={sideImg} alt="" className="bg" />
          </MDBCol>
          <MDBCol md="6">
      <form onSubmit={this.onSubmit} style={{marginTop:"25%"}}>
      <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <br/>
                <p className="h2 text-center mb-6  ">Change Password</p>

        <MDBInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          label="New Password"
          placeholder="New Password"
        />
        <MDBInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          label="Confirm new password"
          placeholder="Confirm New Password"
        />
        <center>
        <MDBBtn disabled={isInvalid} type="submit" color="light-blue" className="mb-3 blue-gradient">
          Reset My Password
        </MDBBtn>
        {error && <p>{error.message}</p>}
        </center>
      </form>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}
export  default withFirebase(PasswordChangeForm);