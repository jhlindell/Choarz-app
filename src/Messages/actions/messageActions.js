import * as types from '../constants/messageConstants';

export function addMessage(message, variant) {
  const timeStamp = new Date().toString();
  const id = message + timeStamp;
  const messageObject = { message, id, variant };
  return { type: types.ADD_MESSAGE, payload: messageObject };
}

export function clearMessage(id) {
  return { type: types.CLEAR_MESSAGE, payload: id };
}
