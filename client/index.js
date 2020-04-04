import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import theme from './theme';

ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <App />
      </>
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));
