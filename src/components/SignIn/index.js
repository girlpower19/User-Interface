import React, { Component } from "react";
import { withRouter,Link} from "react-router-dom";
import { compose } from "recompose";
import { PasswordForgetLink } from "../PasswordForget";
import {SignUpLink} from '../SignUp';
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Route } from 'react-router-dom'

import "./index.css"
//mdb
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { AuthUserContext } from '../Session';
import "./index.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBModalFooter,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const SignInPage = () => (
  <div>
<AuthUserContext.Consumer>
  {
       authUser=>authUser?<Route render={({history})=>(
        history.push(ROUTES.LANDING)
    )}
    />:<SignInForm />
      
  }
    </AuthUserContext.Consumer>
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
      <div>
      <div>
      <MDBContainer className="mobilepage">
      <MDBRow>
      <br />
         
          <MDBCol md="6" >
          <MDBCard>
          <MDBCardBody>
            <form onSubmit={this.onSubmit} style={{marginTop:"9%"}}>
              <div className="logo">
                <img src={logo} alt="" className="logo" />
              </div>
              <p className="h2 text-center mb-6  ">Sign-In</p>
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
              <p className="text-center">{<PasswordForgetLink />}</p>
              <MDBModalFooter className="font-weight-light d-flex justify-content-flex-center">
                <div>
                  
                  <p className="text-left">{<SignUpLink/>}</p>
                </div>
              </MDBModalFooter>
            </form>
            </MDBCardBody>
            </MDBCard>
          </MDBCol>
        
      </MDBRow>
    </MDBContainer>
      </div>

      <MDBContainer className="webpage">
        <MDBRow>
        <br />
            <MDBCol md="6">
              <img src={sideImg} alt="" className="bg" />
            </MDBCol>
            <MDBCol md="6">
              <form onSubmit={this.onSubmit} style={{marginTop:"9%"}}>
                <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <p className="h2 text-center mb-6  ">Sign-In</p>
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
                <p className="text-center">{<PasswordForgetLink />}</p>
                <MDBModalFooter className="font-weight-light d-flex justify-content-center">
                  <div>
                    
                    <p className="text-left">{<SignUpLink/>}</p>
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
const SignInLink = () => (
  <p>
    Already A Member ? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm,SignInLink };
