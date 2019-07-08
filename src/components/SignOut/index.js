import React from 'react';
import {withFirebase} from '../Firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignOutButton=({firebase})=>(
  <div>
    <Link to={ROUTES.SIGN_IN} onClick={()=>{ firebase.doSignOut();alert("YoU ArE OuT");}}>
    Sign Out
    </Link>
  </div>
);

export default withFirebase(SignOutButton);