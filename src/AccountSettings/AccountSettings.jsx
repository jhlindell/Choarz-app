import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import AccountSettingsForm from './AccountSettingsForm';

const useStyles = makeStyles({
  formContainer: {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    margin: 'auto',
    padding: 20,
  },
  cardHeader: {
    textAlign: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function validateAccount(account) {
  console.log('validating');
  let isValid = true;
  const errors = {
    email: undefined,
    username: undefined,
    familyname: undefined,
  };
  if (account.username === '' || account.username === undefined) {
    errors.username = 'Please enter a username';
    isValid = false;
  }
  if (account.email === '' || account.email === undefined) {
    errors.email = 'Please enter an email';
    isValid = false;
  }
  if (account.familyname === '' || account.familyname === undefined) {
    errors.familyname = 'Please enter a family name';
    isValid = false;
  }
  if (!isValid) {
    console.log('errors: ', errors);
    return errors;
  }
  return null;
}

function handleAccountSubmit(
  account,
  editAccount,
  accountValidationError,
  clearAccount,
) {
  const errors = validateAccount(account);
  if (errors === null) {
    editAccount(account);
    clearAccount();
    navigate('/');
  } else {
    accountValidationError(errors);
  }
}

function AccountSettings(props) {
  const { account, onChange } = props;
  const classes = useStyles();

  function handleSaveClick() {
    const { editAccount, accountValidationError, clearAccount } = props;
    handleAccountSubmit(
      account.current,
      editAccount,
      accountValidationError,
      clearAccount,
    );
  }
  return (
    <div>
      {account && !account.isLoading ? (
        <div className={classes.formContainer}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title="Account Settings"
            />
            <CardContent className={classes.cardContent}>
              <AccountSettingsForm
                account={account.current}
                errors={account.errors}
                onChange={onChange}
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                disabled={!account.isDirty}
                onClick={handleSaveClick}
              >
                Save Account Changes
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

AccountSettings.propTypes = {
  account: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  editAccount: PropTypes.func.isRequired,
  accountValidationError: PropTypes.func.isRequired,
  clearAccount: PropTypes.func.isRequired,
};

AccountSettings.defaultProps = {
  account: undefined,
};

export default AccountSettings;
