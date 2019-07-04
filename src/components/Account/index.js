import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = (authUser) => (
    <AuthUserContext.Consumer>
    {authUser => (
    
    <div>
        <center>
    <h1>Account : {authUser.email}</h1>
    <div style={{border:'2px solid dodgerblue',width:'25%',padding:'1%'}}>
    
    <h4>Forget Password</h4>
    <PasswordForgetForm />
    <br/>
    <hr/>
    <h4>Change Password</h4>

    <PasswordChangeForm />
    </div>
    </center>
    </div>)}
        </AuthUserContext.Consumer>
        );
        

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);