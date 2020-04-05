import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  Home,
  Loading,
  Login,
  Profile,
  Register,
  Settings,
} from './Pages';
import { If } from './utils';
import Navbar from './Navbar';

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
}));

function App() {
  const { pathname } = useLocation();

  return (
    <Box
      height={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxWidth={420}
      margin="auto"
    >
      <Box
        component={Paper}
        height={1}
        maxHeight={800}
        m={2}
        width={1}
      >
        <If conditions={[pathname !== '/']}>
          <Navbar />
        </If>

        <Box p={4}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/loading'>
              <Loading />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/settings'>
              <Settings />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default hot(App);
