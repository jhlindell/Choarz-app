import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../commonComponents/TextField';

const useStyles = makeStyles({
  field: {
    width: 400,
    paddingBottom: 20,
  },
});

function AccountSettingsForm(props) {
  const { account, onChange, errors } = props;
  const classes = useStyles();

  const getOnChange = (parentValue, parentOnChange, key) =>
    function onFieldChange(newValue) {
      parentOnChange({ ...parentValue, [key]: newValue });
    };

  return (
    <>
      <TextField
        value={account.familyname}
        label="Family Name"
        error={errors.familyname}
        className={classes.field}
        onChange={getOnChange(account, onChange, 'familyname')}
      />
      <TextField
        value={account.email}
        label="Email"
        error={errors.email}
        className={classes.field}
        onChange={() => {}}
      />
      <TextField
        value={account.username}
        label="Username"
        error={errors.username}
        className={classes.field}
        onChange={getOnChange(account, onChange, 'username')}
      />
    </>
  );
}

AccountSettingsForm.propTypes = {
  account: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

AccountSettingsForm.defaultProps = {
  errors: undefined,
};

export default AccountSettingsForm;
