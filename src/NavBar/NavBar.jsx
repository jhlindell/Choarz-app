import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, navigate } from '@reach/router';
import { clearAccountToken } from '../Auth/actions/authActions';
import getAccountName from './actions/navbarActions';

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
  accountname: {
    fontSize: 20,
    marginRight: 10,
  },
  accountContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

function NavBarDisplay() {
  const auth = useSelector(state => state.auth);
  const nav = useSelector(state => state.nav);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    if (auth.authenticated && !nav) {
      dispatch(getAccountName());
    }
  }, [auth, dispatch, nav]);

  const signOut = () => {
    dispatch(clearAccountToken());
    navigate('/');
  };

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAccountClick = () => {
    setAnchorEl(null);
    navigate('/accountsettings');
  };

  function renderLinks() {
    if (auth && auth.authenticated) {
      let accountname = null;
      if (nav && nav.accountname) {
        accountname = nav.accountname;
      }
      return (
        <div className={classes.accountContainer}>
          <span className={classes.accountname}>{accountname}</span>
          <Button onClick={signOut} variant="contained" color="default">
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
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleAccountClick}>Account Settings</MenuItem>
          </Menu>
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
