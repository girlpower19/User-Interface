import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import {SignInLink} from '../SignIn';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import  "./index.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,

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
        <div>
    <MDBContainer className="mobilepage w-100 ">
        <MDBRow>
        <br/>
        <MDBCol md="6" >
        <MDBCard>
        <MDBCardBody>
        <form onSubmit={this.onSubmit} style={{marginTop:"9%"}}>
        <div className="logo">
                  <img src={logo} alt="" className="logo" />
        </div>
        <p className="h2 text-center mb-6">Sign-Up</p>
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
            label="Confirm password"
                icon="lock"
          />
          <center>Are You Admin ??</center>
            <MDBInput
              
              
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              
              onChange={this.onChangeCheckbox}
              
            />
        
          </div>
          <br/>
          <br/>
          <div className="text-center">
              <MDBBtn color="primary" disabled={isInvalid} type="submit" >SignUp</MDBBtn>
            </div>
  
          {error && <p className="text-center">{error.message}</p>}
          <br/>
          <MDBModalFooter className="font-weight-light d-flex justify-content-center">
          <p className="text-left">{<SignInLink/>}</p>
          </MDBModalFooter>
        </form>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   
        <MDBContainer className="webpage">
        <MDBRow>
        <br/>
          <MDBCol md="6">
              <img src={sideImg} alt="" className="bg" />
          </MDBCol>
        <MDBCol md="6" >
          
        <form onSubmit={this.onSubmit} style={{marginTop:"9%"}}>
        <div className="logo">
                  <img src={logo} alt="" className="logo" />
        </div>
        <p className="h2 text-center mb-6">Sign-Up</p>
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
            label="Confirm password"
                icon="lock"
          />
         <center><b>Are You Admin ??</b></center>
            <MDBInput
              
              
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
              
            />
        <br/>
          </div>
          <br/>
          <div className="text-center">
              <MDBBtn color="primary" disabled={isInvalid} type="submit" >SignUp</MDBBtn>
            </div>
  
          {error && <p className="text-center">{error.message}</p>}
         <br/>
          <MDBModalFooter className="font-weight-light d-flex justify-content-center">
          <div>
                  
                  <p className="text-left">{<SignInLink/>}</p>
          </div>
          </MDBModalFooter>
        </form>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   </div>
      );
    }
  }
  
  const SignUpLink = () => (
    <p>
      Not a Member ? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
  const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
  export default SignUpPage;
  export { SignUpForm, SignUpLink };