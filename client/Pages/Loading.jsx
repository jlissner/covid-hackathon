import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Divider,
  Typography,
} from '@material-ui/core';
import Page from './Page';

function Loading() {
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/register')
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [history]);

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
