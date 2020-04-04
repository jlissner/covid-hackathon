const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(require('./routes'))

if (process.env.NODE_ENV !== 'production') {
  const history = require('connect-history-api-fallback');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(history()); // allows for routes besides root to work
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.resolve('./build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./build/index.html'));
  });
}


module.exports = app;
