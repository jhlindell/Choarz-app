import axios from 'axios';
import { addMessage } from '../../Messages/actions/messageActions';
import * as variants from '../../Messages/constants/messageVariants';
import * as types from '../constants/navbarConstants';

const URL = 'http://localhost:8000';

export default function getAccountName() {
  return function(dispatch, getState) {
    const { auth } = getState();
    axios
      .get(`${URL}/auth/accountname`, {
        headers: { authorization: auth.token },
      })
      .then(response => {
        dispatch({ type: types.SET_ACCOUNTNAME, payload: response.data });
      })
      .catch(error => {
        const err = error.toString();
        dispatch(addMessage(err, variants.ERROR));
      });
  };
}
