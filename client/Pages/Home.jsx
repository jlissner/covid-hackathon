import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import Page from './Page';
import qrScan from '../images/qr-scan.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: ({ pathname }) => pathname === '/' ? '4rem' : '2rem',
    marginLeft: ({ pathname }) => pathname === '/' ? 'calc(50% - 181.5px)' : 0,
    transition: '.18s all ease-in-out',
  },
  subTitle: {
    color: '#777',
    fontSize: ({ pathname }) => pathname === '/' ? '2.125rem' : '1.125rem',
    marginLeft: ({ pathname }) => pathname === '/' ? 'calc(50% - 133px)' : 0,
    transition: '.18s all ease-in-out',
  },
  button: {
    padding: theme.spacing(4),
  },
}))

function Home() {
  const { pathname } = useLocation();
  const classes = useStyles({ pathname });

  return (
    <Page key="home">
      <Box>
        <Typography className={classes.title} variant="h1">ImmunePass</Typography>
        <Typography className={classes.subTitle} variant="h4">Return to Society</Typography>
      </Box>

      <Box
        component={Link}
        display="block"
        style={{ background: `rgba(0, 0, 0, 0) url("${qrScan}") no-repeat scroll center center / cover` }}
        border={4}
        borderRadius={4}
        borderColor="primary.main"
        height={350}
        my={5}
        to="/loading"
      />

      <Box my={4}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={12}><Divider /></Grid>
          <Grid item>
            <Box p={2}>
              <Typography>or</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}><Divider /></Grid>
        </Grid>
      </Box>

      <Button
        className={classes.button}
        component={Link}
        to='/login'
        fullWidth
        variant="outlined"
      >
        Login
      </Button>
    </Page>
  )
}

export default Home;
