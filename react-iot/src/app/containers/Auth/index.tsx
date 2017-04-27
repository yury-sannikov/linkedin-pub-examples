import * as React from 'react';
const style = require('./style.css');

class Auth extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Auth}>
        <div className="bg-white pulldown">
            <div className="content content-boxed overflow-hidden">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
        <div className="pulldown push-30-t text-center animated fadeInUp">
            <small className="text-muted"><span className="js-year-copy"></span> &copy; SmartSurgeon 2017</small>
        </div>
      </div>
    );
  }
}
export {Auth}
