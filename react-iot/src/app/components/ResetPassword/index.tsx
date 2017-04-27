import * as React from 'react';
import { Link } from 'react-router';

export const ResetPassword = () => (
    <div className="push-30-t push-20 animated fadeIn">
        <div className="text-center">
            <i className="fa fa-2x fa-circle-o-notch text-primary"/>
            <p className="text-muted push-15-t">Don’t worry, we’ll send a reset link to you.</p>
        </div>
        <form className="js-validation-reminder form-horizontal push-30-t"
                action="base_pages_reminder_v2.html"
                method="post">
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="form-material form-material-primary floating">
                        <input className="form-control" type="email" id="reminder-email" name="reminder-email"/>
                        <label htmlFor="reminder-email">Enter Your Email</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                    <button className="btn btn-sm btn-block btn-primary" type="submit">Reset Password</button>
                </div>
            </div>
        </form>
        <div className="text-center push-25-t">
            <Link to="/auth/login">Login?</Link>
        </div>
    </div>
);
