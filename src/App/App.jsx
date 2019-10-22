import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import Home from '../Home/Home';
import Messages from '../Messages/MessageContainer';
import NavBar from '../NavBar/NavBar';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import SigninSuccess from '../Auth/SigninSuccess';

const useStyles = makeStyles({
  root: {
    margin: -8,
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Messages />
      <Router>
        <Home path="/" />
        <AccountSettings path="/accountsettings" />
        <Signin path="/signin" />
        <Signup path="/signup" />
        <SigninSuccess path="/signinsuccess" />
      </Router>
    </div>
  );
}

export default App;
