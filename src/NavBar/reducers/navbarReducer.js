import * as types from '../constants/navbarConstants';

export default function navbarReducer(state = null, action) {
  switch (action.type) {
    case types.SET_ACCOUNTNAME:
      return { accountname: action.payload };
    default:
      return state;
  }
}
