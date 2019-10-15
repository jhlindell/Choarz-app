export default function messageReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const message = action.payload;
      return [...state, message];
    }
    case 'CLEAR_MESSAGE': {
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
