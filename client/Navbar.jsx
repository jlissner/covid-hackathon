import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  AccountCircle as ProfileIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { If } from './utils';

const useStyles = makeStyles((theme) => ({
  title: {
		padding: theme.spacing(1)
	},
}));

function Navbar() {
  const [menu, setMenu] = useState(null)
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" component="h1">
          	ImmunePass
          </Typography>

          <Box ml='auto'>
            <If conditions={[pathname === '/profile', pathname === '/settings']}>
              <IconButton color="inherit" onClick={(evt) => setMenu(evt.target)}>
                <ProfileIcon fontSize="large" />
              </IconButton>
            </If>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu open={Boolean(menu)} anchorEl={menu}>
        <MenuItem component={Link} onClick={() => setMenu(null)} to="/settings">Edit Profile</MenuItem>
        <MenuItem component={Link} onClick={() => setMenu(null)} to="/">Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;
