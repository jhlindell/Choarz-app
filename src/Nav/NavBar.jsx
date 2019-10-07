import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, navigate } from '@reach/router';
import { clearAccountToken } from '../Auth/actions/authActions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  title: {
    flexGrow: 1,
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'black',
  },
});

function NavBarDisplay() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  function signOut() {
    clearAccountToken(dispatch);
    navigate('/');
  }

  function renderLinks() {
    if (auth && auth.authenticated) {
      return (
        <div>
          <Button
            onClick={signOut}
            variant="contained"
            color="default"
          >
            Sign Out
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Button variant="contained" color="default">
          <Link to="/signin" className={classes.buttonLink}>
            Signin
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Choarz!
          </Typography>
          {renderLinks()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarDisplay;
