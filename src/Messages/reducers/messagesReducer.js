import * as types from '../constants/messageConstants';

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      const message = action.payload;
      return [...state, message];
    }
    case types.CLEAR_MESSAGE: {
      const stateArray = state;
      const filteredArray = stateArray.filter(message => {
        if (message.id && message.id !== action.payload) {
          return message;
        }
        return null;
      });
      return filteredArray;
    }
    default:
      return state;
  }
}
