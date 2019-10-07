import { Redirect } from '@reach/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { saveAccountToken } from './actions/authActions';

class SigninSuccess extends Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    if (query.token) {
      this.props.saveAccountToken(query.token);
    }
  }

  render() {
    const { auth } = this.props;
    if (auth && auth.authenticated) {
      return <Redirect to="/" noThrow />;
    }
    return null;
  }
}

SigninSuccess.propTypes = {
  location: PropTypes.object,
  saveAccountToken: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

SigninSuccess.defaultProps = {
  location: undefined,
  auth: undefined,
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  { saveAccountToken },
)(SigninSuccess);
