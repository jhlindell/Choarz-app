import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  card: {
    width: 200,
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 100,
  },
});

const onClick = () => {
  window.open('http://localhost:8000/auth/google', '_self');
};

export default function Signin() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Please sign in using one of the following options:</h3>
      <Card className={classes.card}>
        <div>
          <Button onClick={onClick}>Login with google</Button>
        </div>
      </Card>
    </div>
  );
}
