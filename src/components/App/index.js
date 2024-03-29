import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import passwordChange from '../PasswordChange';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import withAuthentication from '../Session/withAuthentication';
import TandC from '../TermsandConditions';
const  App=()=>( 
  <div>
    <Router>
    <Switch>
    
	<Route exact path={ROUTES.LANDING} component={LandingPage}/>
    <Route component={DefaultContainer}/>
    </Switch>
    </Router>
  </div>
 );


const DefaultContainer = () => (
 
      <div>
     <Navigation/>
     <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
     <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
		<Route exact path={ROUTES.PASSWORD_CHANGE} component={passwordChange} />
    <Route exact path={ROUTES.TANDC} component={TandC} />

    <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route
            exact
            path={ROUTES.ACCOUNT}
            component={AccountPage}
          />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />

        </div>
      
  
)
export default withAuthentication(App);