import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccount,
  accountOnChange,
  editAccount,
  accountValidationError,
  clearAccount,
} from './actions/accountActions';
import AccountSettings from './AccountSettings';

export default function AccountSettingsContainer() {
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);

  function onChange(value) {
    dispatch(accountOnChange(value));
  }

  function onSubmit(value) {
    dispatch(editAccount(value));
  }

  function validationError(value) {
    dispatch(accountValidationError(value));
  }

  function clear() {
    dispatch(clearAccount());
  }

  useEffect(() => {
    dispatch(getAccount());
  }, [dispatch]);

  return (
    <AccountSettings
      account={account}
      onChange={onChange}
      editAccount={onSubmit}
      accountValidationError={validationError}
      clearAccount={clear}
    />
  );
}
