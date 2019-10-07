import * as types from '../constants/authConstants';

export function saveAccountToken(token) {
  return function(dispatch) {
    dispatch({ type: types.AUTH_ACCOUNT, payload: token });
  };
}

export function clearAccountToken(dispatch) {
  dispatch({ type: types.UNAUTH_ACCOUNT });
}
