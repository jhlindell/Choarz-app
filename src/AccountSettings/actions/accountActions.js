import axios from 'axios';
import { addMessage } from '../../Messages/actions/messageActions';
import * as variants from '../../Messages/constants/messageVariants';
import * as types from '../constants/accountTypes';

const URL = process.env.SERVER_URL;
export const loadAccountBegin = () => ({ type: types.LOAD_ACCOUNT_BEGIN });
export const loadAccountSuccess = data => ({
  type: types.LOAD_ACCOUNT_SUCCESS,
  account: data,
});
export const loadAccountFailure = () => ({ type: types.LOAD_ACCOUNT_FAILURE });
export const editAccountBegin = () => ({ type: types.EDIT_ACCOUNT_BEGIN });
export const editAccountSuccess = () => ({ type: types.EDIT_ACCOUNT_SUCCESS });
export const editAccountFailure = () => ({ type: types.EDIT_ACCOUNT_FAILURE });

export function getAccount() {
  return function(dispatch, getState) {
    const { auth } = getState();
    dispatch(loadAccountBegin());
    axios
      .get(`${URL}/account`, {
        headers: { authorization: auth.token },
      })
      .then(response => dispatch(loadAccountSuccess(response.data)))
      .catch(error => {
        const err = error.toString();
        dispatch(addMessage(err, variants.ERROR));
        dispatch(loadAccountFailure());
      });
  };
}

export function editAccount(account) {
  return function(dispatch, getState) {
    const { auth } = getState();
    dispatch(editAccountBegin());
    axios
      .put(`${URL}/account`, account, {
        headers: { authorization: auth.token },
      })
      .then(() => dispatch(editAccountSuccess()))
      .catch(error => {
        const err = error.toString();
        dispatch(addMessage(err, variants.ERROR));
        dispatch(editAccountFailure());
      });
  };
}

export function clearAccount() {
  return { type: types.CLEAR_ACCOUNT };
}

export function accountOnChange(account) {
  return { type: types.ACCOUNT_ON_CHANGE, account };
}

export function accountValidationError(errors) {
  return { type: types.ACCOUNT_VALIDATION_ERROR, errors };
}
