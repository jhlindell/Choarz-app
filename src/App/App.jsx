import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import NavBar from '../Nav/NavBar';
import Welcome from '../Welcome/Welcome';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

const useStyles = makeStyles({
  root: {
    margin: -8,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Router>
        <Welcome path="/" />
        <Signin path="/signin" />
        <Signup path="/signup" />
      </Router>
    </div>
  );
}

export default App;
