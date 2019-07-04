import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div style={{backgroundColor:'dodgerblue',fontSize:'150%',color:'white'}}>
  <AuthUserContext.Consumer>
  {
    authUser=>authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
   </AuthUserContext.Consumer>
</div>

);

const NavigationAuth=({authUser})=> (
  <div style={{display:'flex',justifyContent:'space-around'}}>
      <Link style={{color:'white',textDecoration:'none',}}  to={ROUTES.LANDING}>Landing</Link>
      <Link style={{color:'white',textDecoration:'none',}} to={ROUTES.HOME}>Home</Link>
      <Link style={{color:'white',textDecoration:'none',}}   to={ROUTES.ACCOUNT}>Account</Link>
{authUser.roles.includes(ROLES.ADMIN) &&(      <Link style={{color:'white',textDecoration:'none',}}   to={ROUTES.ADMIN}>Admin</Link>
     )}
      <SignOutButton />
    </div>
);
const NavigationNonAuth = () => (
  <div style={{display:'flex',justifyContent:'space-around',color:'white'}}>
      <Link style={{color:'white',textDecoration:'none',}} to={ROUTES.LANDING}>Landing</Link>
   
      <Link style={{color:'white',textDecoration:'none',}} to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
);

export default Navigation;