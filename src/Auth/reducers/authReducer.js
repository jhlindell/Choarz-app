import * as types from '../constants/authConstants';

export default function authReducer(state = null, action) {
  switch (action.type) {
    case types.AUTH_ACCOUNT:
      localStorage.setItem('accountToken', action.payload);
      return {
        ...state,
        authenticated: true,
        token: action.payload,
      };
    case types.UNAUTH_ACCOUNT:
      localStorage.removeItem('accountToken');
      return { ...state, authenticated: false, token: undefined };
    default:
      return state;
  }
}
