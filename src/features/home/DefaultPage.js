import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import * as actions from './redux/actions';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Maps from '../google-map/Maps';
import Table from '../google-map/Table';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  responseGoogle(response) {
    console.log(response);
  }

  loginUnmount(response) {
    this.setState({ login: false });
    console.log(response);
    var name = response.profileObj.name;
   return name;
  }

  loginMount() {
    this.setState({ login: true });
  }

  constructor(props) {
    super();
    this.state = {
      login: true,
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.loginUnmount = this.loginUnmount.bind(this);
    this.loginMount = this.loginMount.bind(this);
  }

  render() {
    return (
      <div className="home-default-page">
        <header className="app-header">
          <img src={rekitLogo} className="app-logo" alt="logo" />
          <img src={rekitLogo} className="rekit-logo" alt="logo" />
          <h1 className="app-title">Digipaali</h1>
        </header>
        <div className="app-intro">
          {this.state.login ? (
            <GoogleLogin
              clientId="1053706755883-losp8vfhdffgakrfvlldm3gcht7gpsol.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.loginUnmount}
              onFailure={this.responseGoogle}
            />
          ) : null}
          {this.state.login ? null : (
            <div className="log-in-content">
              <div className="welcome-text">Welcome</div>
              <GoogleLogout buttonText="Logout" onLogoutSuccess={this.loginMount} />
              <Table />
              <Maps />
            </div>
          )}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
