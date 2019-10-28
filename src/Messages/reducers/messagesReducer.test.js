import reducer from 'Messages/reducers/messagesReducer';
import { addMessage, clearMessage } from 'Messages/actions/messageActions';
import * as variants from 'Messages/constants/messageVariants';

describe('Message reducer test', () => {
  it('should properly add a message', () => {
    const action = addMessage('test message', variants.ERROR);
    const newState = reducer([], action);

    expect(newState.length).toBe(1);
  });

  it('should properly clear a message from message queue', () => {
    //to get the proper id, we must first add a message to queue
    const action1 = addMessage('test message', variants.ERROR);
    const newState1 = reducer([], action1);
    const messageId = newState1[0].id;

    const action2 = clearMessage(messageId);
    const newState2 = reducer(newState1, action2);

    expect(newState2.length).toBe(0);
  });
});
