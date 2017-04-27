import * as React from 'react';
import { Link } from 'react-router';

export const Login = () => (
  <div className="push-30-t push-50 animated fadeIn">
      <div className="text-center">
          <i className="fa fa-2x fa-circle-o-notch text-primary"/>
          <p className="text-muted push-15-t">A perfect match for your project</p>
      </div>
      <form className="js-validation-login form-horizontal push-30-t"
        action="base_pages_dashboard.html"
        method="post">
          <div className="form-group">
              <div className="col-xs-12">
                  <div className="form-material form-material-primary floating">
                      <input className="form-control"
                        type="text"
                        id="login-username"
                        name="login-username"/>
                      <label htmlFor="login-username">Username</label>
                  </div>
              </div>
          </div>
          <div className="form-group">
              <div className="col-xs-12">
                  <div className="form-material form-material-primary floating">
                      <input className="form-control"
                        type="password"
                        id="login-password"
                        name="login-password"/>
                      <label htmlFor="login-password">Password</label>
                  </div>
              </div>
          </div>
          <div className="form-group">
              <div className="col-xs-6">
                  <label className="css-input switch switch-sm switch-primary">
                      <input type="checkbox" id="login-remember-me" name="login-remember-me"/>
                      <span/>Remember Me?
                  </label>
              </div>
              <div className="col-xs-6">
                  <div className="font-s13 text-right push-5-t">
                      <Link to="/auth/reset">Forgot Password?</Link>
                  </div>
              </div>
          </div>
          <div className="form-group push-30-t">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                  <button className="btn btn-sm btn-block btn-primary" type="submit">
                    Log in
                  </button>
              </div>
          </div>
      </form>
        <div className="text-center push-25-t">
            <Link to="/auth/register">Register?</Link>
        </div>
  </div>

);
