import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle as ProfileIcon,
  Menu as MenuIcon,
} from '@material-ui/icons';
import { useGlobalState } from './hooks';

const useStyles = makeStyles((theme) => ({
  title: {
		padding: theme.spacing(1)
	},
}));

function Navbar() {
  const classes = useStyles();
  const [, setNavOpen] = useGlobalState('navOpen');

  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" onClick={() => setNavOpen(true)}><MenuIcon /></IconButton>
        <Typography className={classes.title} variant="h6" component="h1">
        	COVID-19 Hackathon
        </Typography>

        <Box ml='auto'>
          <ProfileIcon fontSize="large" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
