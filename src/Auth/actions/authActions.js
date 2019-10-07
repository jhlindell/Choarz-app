import * as types from '../constants/authConstants';

export function saveAccountToken(dispatch, token) {
  dispatch({ type: types.AUTH_ACCOUNT, payload: token });
}

export function clearAccountToken(dispatch) {
  dispatch({ type: types.UNAUTH_ACCOUNT });
}
