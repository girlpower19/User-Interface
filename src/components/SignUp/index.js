import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import { compose } from 'recompose';


import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
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

const SignUpPage = () => (
  <div>
   <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
    
   
  </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
  };
  
  const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
  
  const ERROR_MSG_ACCOUNT_EXISTS = `
    An account with this E-Mail address already exists.
    Try to login with this account instead. If you think the
    account is already used from one of the social logins, try
    to sign in with one of them. Afterward, associate your accounts
    on your personal account page.
  `;
  
  class SignUpFormBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = event => {
      const { username, email, passwordOne, isAdmin } = this.state;
      const roles = {};
  
      if (isAdmin) {
        roles[ROLES.ADMIN] = ROLES.ADMIN;
      }
  
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase.user(authUser.user.uid).set({
            username,
            email,
            roles,
          });
        })
        .then(() => {
          return this.props.firebase.doSendEmailVerification();
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
            error.message = ERROR_MSG_ACCOUNT_EXISTS;
          }
  
          this.setState({ error });
        });
  
      event.preventDefault();
    };
  
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    onChangeCheckbox = event => {
      this.setState({ [event.target.name]: event.target.checked });
    };
  
    render() {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        isAdmin,
        error,
      } = this.state;
  
      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
  
        const sideImg = require("./w1.jpg");
        const logo = require("./w4.png");

      return (
        <MDBContainer>
        <MDBRow>
          <br />
          <div class="d-flex justify-content-center"></div>
          <MDBCol md="5">
              <img src={sideImg} alt="" className="bg" />
            </MDBCol>
            <MDBCol md="4">
        <form onSubmit={this.onSubmit} >
        <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
        <p className="h2 text-center mb-6">Sign Up</p>
       <div >
        <MDBInput
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
            label="Your name"
            icon="user"
          />
          <MDBInput
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            label="Your email"
                icon="envelope"
            
          />
          <MDBInput
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            label="Your password"
                icon="lock"
          />
          <MDBInput
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
            label="Your password"
                icon="lock"
          />
         
            <MDBInput
              // alignitems="center"
              // display="flex"
              // justify-item="center"
              label="Admin"
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              filled
              onChange={this.onChangeCheckbox}
              
            />
            
          </div>
          <br/>
          <div className="text-center">
              <MDBBtn color="primary" disabled={isInvalid} type="submit" >SignUp</MDBBtn>
            </div>
  
          {error && <p>{error.message}</p>}
        </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      );
    }
  }
  
  const SignUpLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
  const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
  export default SignUpPage;
  export { SignUpForm, SignUpLink };