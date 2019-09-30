import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import { Link } from '@reach/router';
import React from 'react';
import GoogleLogin from 'react-google-login';

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

const responseGoogle = response => {
  console.log(response);
};

const onFailure = error => {
  console.log(error);
};

export default function Signin() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Please sign in using one of the following options:</h3>
      <Card className={classes.card}>
        <div>
          <GoogleLogin
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
        {/* <div>
          <Link to="/signup">Signup</Link>
        </div> */}
      </Card>
    </div>
  );
}
