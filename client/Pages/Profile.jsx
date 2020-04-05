import React from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import _startCase from 'lodash/startCase';
import Page from './Page';
import QRCode from 'qrcode.react';

const statuses = {
  immune: {
    bgcolor: 'success.main',
    borderColor: 'success.dark',
  },
  notImmune: {
    bgcolor: 'warning.main',
    borderColor: 'warning.dark',
  },
  active: {
    bgcolor: 'error.main',
    borderColor: 'error.dark',
  },
  pending: {
    bgcolor: 'info.main',
    borderColor: 'info.dark',
  },
};

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function Profile() {
  const classes = useStyles();
  const { search } = useLocation();
  const status = search.split('=')[1];
  const title = _startCase(status);
  const colors = statuses[status];

  return (
    <Page key="profile">
      <Typography className={classes.pageTitle} align="center" variant="h5">COVID-19 Status</Typography>
      <Divider />
      <Box p={1} />
      <Box
        {...colors}
        border={1}
        borderRadius={4}
        color="white"
        p={1}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" color="inherit" variant="h5">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" p={2}>
              <QRCode value="My ImmunePass code" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography>#jsk29sllsx</Typography>
              </Grid>
              <Grid item>
                <Typography>04/04/2020</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box pt={2}>
        <Button fullWidth variant="outlined">Share</Button>
      </Box>
    </Page>
  );
}

export default Profile;
