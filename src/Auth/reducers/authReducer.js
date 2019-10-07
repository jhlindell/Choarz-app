export default function authReducer(state = {}, action) {
  switch (action.type) {
    case 'AUTH_ACCOUNT':
      localStorage.setItem('accountToken', action.payload);
      return {
        ...state,
        authenticated: true,
        token: action.payload,
      };
    case 'UNAUTH_ACCOUNT':
      localStorage.removeItem('accountToken');
      return { ...state, authenticated: false, token: undefined };
    default:
      return state;
  }
}
