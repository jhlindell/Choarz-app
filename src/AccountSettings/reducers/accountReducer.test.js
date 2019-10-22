import reducer from 'AccountSettings/reducers/accountReducer';
import initialState from 'AccountSettings/reducers/accountInitialState';
import {
  loadAccountBegin,
  loadAccountSuccess,
  loadAccountFailure,
  editAccountBegin,
  editAccountSuccess,
  editAccountFailure,
  clearAccount,
  accountOnChange,
  accountValidationError,
} from 'AccountSettings/actions/accountActions';

describe('Account Reducer Tests', () => {
  it('load account begin test', () => {
    const action = loadAccountBegin();
    const newState = reducer(initialState, action);

    expect(newState).toStrictEqual({
      isLoading: true,
      current: undefined,
      isDirty: false,
      errors: {},
    });
  });

  it('load account success test', () => {
    const account = { _id: '12345' };
    const action = loadAccountSuccess(account);
    const newState = reducer(initialState, action);

    expect(newState.current._id).toBe('12345');
  });

  it('load account failure test', () => {
    const loadAccountBeginState = {
      isLoading: true,
      current: undefined,
      isDirty: false,
      errors: {},
    };
    const action = loadAccountFailure();
    const newState = reducer(loadAccountBeginState, action);

    expect(newState).toStrictEqual(initialState);
  });

  it('editAccountBegin test', () => {
    const action = editAccountBegin();
    const newState = reducer(initialState, action);

    expect(newState).toStrictEqual({
      isLoading: true,
      current: undefined,
      isDirty: false,
      errors: {},
    });
  });

  it('editAccountSuccess test', () => {
    const editAccountSuccessStartState = {
      isLoading: true,
      current: undefined,
      isDirty: false,
      errors: {},
    };
    const action = editAccountSuccess();
    const newState = reducer(editAccountSuccessStartState, action);

    expect(newState).toStrictEqual(initialState);
  });

  it('editAccountFailure test', () => {
    const editAccountFailureStartState = {
      isLoading: true,
      current: undefined,
      isDirty: false,
      errors: {},
    };
    const action = editAccountFailure();
    const newState = reducer(editAccountFailureStartState, action);

    expect(newState).toStrictEqual(initialState);
  });

  it('clearAccount test', () => {
    const clearAccountStartState = {
      isLoading: false,
      current: { _id: '12345' },
      isDirty: false,
      errors: {},
    };
    const action = clearAccount();
    const newState = reducer(clearAccountStartState, action);

    expect(newState).toStrictEqual(initialState);
  });

  it('accountOnChange test', () => {
    const accountOnChangeStartState = {
      isLoading: false,
      current: { _id: '12345' },
      isDirty: false,
      errors: {},
    };
    const accountChange = { _id: '123456' };
    const action = accountOnChange(accountChange);
    const newState = reducer(accountOnChangeStartState, action);

    expect(newState).toStrictEqual({
      isLoading: false,
      current: { _id: '123456' },
      isDirty: true,
      errors: {},
    });
  });

  it('accountValidationError test', () => {
    const errors = { _id: 'id cannot be empty' };
    const action = accountValidationError(errors);
    const newState = reducer(initialState, action);

    expect(newState).toStrictEqual({
      isLoading: false,
      current: undefined,
      isDirty: false,
      errors: { _id: 'id cannot be empty' },
    });
  });
});
