import { combineReducers } from 'redux';
import account from '../AccountSettings/reducers/accountReducer';
import auth from '../Auth/reducers/authReducer';
import messages from '../Messages/reducers/messagesReducer';
import nav from '../NavBar/reducers/navbarReducer';

const appReducer = combineReducers({
  account,
  auth,
  messages,
  nav,
});

export default appReducer;
