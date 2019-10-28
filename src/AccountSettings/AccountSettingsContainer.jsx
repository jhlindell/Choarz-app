import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAccount,
  accountOnChange,
  editAccount,
  accountValidationError,
  clearAccount,
} from './actions/accountActions';
import AccountSettings from './AccountSettings';

class AccountSettingsContainer extends React.Component {
  componentDidMount() {
    this.props.getAccount();
  }

  render() {
    return (
      <AccountSettings
        account={this.props.account}
        onChange={this.props.accountOnChange}
        editAccount={this.props.editAccount}
        accountValidationError={this.props.accountValidationError}
        clearAccount={this.props.clearAccount}
      />
    );
  }
}

AccountSettingsContainer.propTypes = {
  account: PropTypes.object,
  accountOnChange: PropTypes.func.isRequired,
  editAccount: PropTypes.func.isRequired,
  accountValidationError: PropTypes.func.isRequired,
  clearAccount: PropTypes.func.isRequired,
  getAccount: PropTypes.func.isRequired,
};

AccountSettingsContainer.defaultProps = {
  account: undefined,
};

function mapState(state) {
  return { account: state.account };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      accountOnChange,
      editAccount,
      accountValidationError,
      clearAccount,
      getAccount,
    },
    dispatch,
  );
}

export default connect(
  mapState,
  mapDispatch,
)(AccountSettingsContainer);
