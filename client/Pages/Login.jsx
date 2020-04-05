import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import Page from './Page';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2),
  },
}))

function Login() {
  const classes = useStyles();

  return (
    <Page key="login">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h5">Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Box p={0.5} />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className={classes.button}
            component={Link}
            to='/profile?status=immune'
            fullWidth
            variant="contained"
          >
            with FaceID
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className={classes.button}
            component={Link}
            to='/profile?status=notImmune'
            fullWidth
            variant="contained"
          >
            with Password
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className={classes.button}
            component={Link}
            to='/profile?status=active'
            fullWidth
            variant="contained"
          >
            with SMS
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            className={classes.button}
            component={Link}
            to='/profile?status=pending'
            fullWidth
            variant="contained"
          >
            with Phone Call
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Login;


