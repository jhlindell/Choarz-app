import { combineReducers } from 'redux';
import auth from '../Auth/reducers/authReducer';
import messages from '../Messages/reducers/messagesReducer';
import nav from '../NavBar/reducers/navbarReducer';

const appReducer = combineReducers({
  auth,
  messages,
  nav,
});

export default appReducer;
