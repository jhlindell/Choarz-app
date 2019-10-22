import * as types from '../constants/accountTypes';
import initialState from './accountInitialState';

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ACCOUNT_BEGIN:
      return { ...state, isLoading: true, current: undefined };
    case types.LOAD_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, current: action.account };
    case types.LOAD_ACCOUNT_FAILURE:
      return { ...state, isLoading: false, current: undefined };
    case types.EDIT_ACCOUNT_BEGIN:
      return { ...state, isLoading: true };
    case types.EDIT_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false };
    case types.EDIT_ACCOUNT_FAILURE:
      return { ...state, isLoading: false };
    case types.CLEAR_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        current: initialState.current,
        errors: initialState.errors,
        isDirty: false,
      };
    case types.ACCOUNT_ON_CHANGE:
      return { ...state, current: action.account, isDirty: true };
    case types.ACCOUNT_VALIDATION_ERROR:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
