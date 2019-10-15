import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import SigninSuccess from '../Auth/SigninSuccess';
import Messages from '../Messages/MessageContainer';

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
        <Signin path="/signin" />
        <Signup path="/signup" />
        <SigninSuccess path="/signinsuccess" />
      </Router>
    </div>
  );
}

export default App;
