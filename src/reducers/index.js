import { combineReducers } from 'redux';
import auth from '../Auth/reducers/authReducer';
import messages from '../Messages/reducers/messagesReducer';

const appReducer = combineReducers({
  auth,
  messages,
});

export default appReducer;
