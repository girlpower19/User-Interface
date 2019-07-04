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
  MDBBtn
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
      const sideImg = require("./download.jpg");
        const logo = require("./w4.png");

    return (
      <MDBContainer style={{alignitems:'center'}}>
      <MDBRow>
        <br />
        <div class="d-flex justify-content-center"></div>
        <MDBCol md="5">
            <img src={sideImg} alt="" className="bg" />
          </MDBCol>
          <MDBCol md="4">
      <form onSubmit={this.onSubmit}>
      <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
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
        <MDBBtn disabled={isInvalid} type="submit">
          Reset My Password
        </MDBBtn>

        {error && <p>{error.message}</p>}
      </form>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}
export  default withFirebase(PasswordChangeForm);