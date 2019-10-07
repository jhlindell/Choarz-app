import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from '@reach/router';
import queryString from 'query-string';
import { saveAccountToken } from './actions/authActions';

function SigninSuccess(props) {
  const { location } = props;
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const query = queryString.parse(location.search);
    if (query.token) {
      saveAccountToken(dispatch, query.token);
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  if (auth && auth.authenticated) {
    return <Redirect to="/" noThrow />;
  }
  return null;
}

SigninSuccess.propTypes = {
  location: PropTypes.object,
};

SigninSuccess.defaultProps = {
  location: undefined,
};

export default SigninSuccess;
