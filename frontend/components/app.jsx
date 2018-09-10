import React from 'react';
import Greeting from './greeting_container';
import { Route, Link } from 'react-router-dom';

import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

import { AuthRoute, ProtectedRoute, Switch } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <Greeting />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
