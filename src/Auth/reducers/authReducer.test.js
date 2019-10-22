import reducer from 'Auth/reducers/authReducer';
import { saveAccountToken, clearAccountToken } from 'Auth/actions/authActions';

describe('Auth reducer tests', () => {
  it('should save an auth token properly and set authenticated prop to true', () => {
    const token = 'adsv9087q23vyvcnqwrkjbasdvzxoiuy8976qwrbasdjkqwr';
    const action = saveAccountToken(token);
    const newState = reducer(null, action);

    expect(newState).toStrictEqual({
      authenticated: true,
      token: 'adsv9087q23vyvcnqwrkjbasdvzxoiuy8976qwrbasdjkqwr',
    });
  });

  it('should clear auth token and set authenticated prop to false', () => {
    const clearStartState = {
      authenticated: true,
      token: 'adsv9087q23vyvcnqwrkjbasdvzxoiuy8976qwrbasdjkqwr',
    };
    const action = clearAccountToken();
    const newState = reducer(clearStartState, action);

    expect(newState).toStrictEqual({
      authenticated: false,
      token: undefined,
    });
  });
});
