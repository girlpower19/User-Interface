import React from 'react';
import {compose} from 'recompose';
import { withAuthorization,withEmailVerification } from '../Session';
class HomePage extends React.Component {
  render()
  {
    return (
     <h1>hey, This will be feed page.</h1>
    );
  }
}

const condition = authUser => !!authUser;
export default compose(withEmailVerification,withAuthorization(condition))(HomePage);