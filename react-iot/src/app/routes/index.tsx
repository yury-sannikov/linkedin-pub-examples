import * as React from 'react';
import { IndexRoute, IndexRedirect, Route } from 'react-router';
import { App, Home, About, Counter, Stars, Auth } from 'containers';
import { Login, Register, ResetPassword } from 'components';

export default (
  <Route path="/">
    <Route path="/backend" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="counter" component={Counter} />
      <Route path="stars" component={Stars} />
    </Route>
    <Route path="/auth" component={Auth}>
      <IndexRedirect to='/auth/login' />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="reset" component={ResetPassword} />
    </Route>
  </Route>
);
