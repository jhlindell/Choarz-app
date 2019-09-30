import { combineReducers } from 'redux';

function account(state = [], action) {
  switch (action.type) {
    case 'GET_ACCOUNT':
      return action.payload;
    default:
      return state;
  }
}

const appReducer = combineReducers({
  account,
});

export default appReducer;
