import { combineReducers } from 'redux';
import auth from '../Auth/reducers/authReducer';

const appReducer = combineReducers({
  auth,
});

export default appReducer;
