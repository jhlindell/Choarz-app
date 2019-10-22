import reducer from 'NavBar/reducers/navbarReducer';
import * as types from 'NavBar/constants/navbarConstants';

describe('NavBar reducer tests', () => {
  it('should properly set the account name', () => {
    const name = 'Joe Bloe';
    const action = name => ({ type: types.SET_ACCOUNTNAME, payload: name });
    const newState = reducer(null, action(name));

    expect(newState.accountname).toBe(name);
  });
});
