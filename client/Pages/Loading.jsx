import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import _startCase from 'lodash/startCase';
import Page from './Page';
import QRCode from 'qrcode.react';
import Navbar from '../Navbar';

function Loading() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/register')
    }, 2000)
  }, [])

  return (
    <Page key="loading">
      <Box my={1}>
        <Typography align="center" variant="h5">Authenticating</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box
        display="flex"
        justifyContent="center"
        p={4}
      >
        <CircularProgress size={80} />
      </Box>
    </Page>
  );
}

export default Loading;
