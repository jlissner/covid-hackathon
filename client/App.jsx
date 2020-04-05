import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  Box,
  Paper,
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
