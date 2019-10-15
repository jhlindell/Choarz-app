import * as types from '../constants/authConstants';

export function saveAccountToken(token) {
  return { type: types.AUTH_ACCOUNT, payload: token };
}

export function clearAccountToken() {
  return { type: types.UNAUTH_ACCOUNT };
}
