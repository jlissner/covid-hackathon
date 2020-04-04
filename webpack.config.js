process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;
const isProd = env === 'production';

if (!isProd) {
  require('dotenv');
}

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const TerserPlugin = require('terser-webpack-plugin');
const imageInlineSizeLimit = parseInt((process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'), 10);

const entry = isProd
  ? [path.resolve('./client/index')]
  : [
    'webpack-hot-middleware/client',
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.resolve('./client/index'),
  ];

const prodPlugins = [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: path.resolve('./public/index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }
    ),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: '' }),
    new ModuleNotFoundPlugin(path.resolve('.')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
    new webpack.optimize.OccurrenceOrderPlugin(),
]

module.exports = {
  mode: env,
  bail: isProd,
  entry,
  devtool: isProd ? false : 'cheap-module-source-map',
  output: {
    path: path.resolve('./build'),
    filename: isProd ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
    plugins: [
      new ModuleScopePlugin(path.resolve('./client'), [path.resolve('./package.json')]),
    ],
    alias: isProd ? {} : { 'react-dom': '@hot-loader/react-dom' },
  },
  module: {
    rules: [
      { parser: { requireEnsure: false } }, // Disable require.ensure as it's not a standard language feature.
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve('./client'),
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: imageInlineSizeLimit,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            include: [/client/],
          }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      }
    ],
  },
  plugins: isProd
    ? prodPlugins
    : [
      ...prodPlugins,
      new webpack.HotModuleReplacementPlugin(),
    ],
  optimization: {
    minimize: isProd,
    minimizer: [new TerserPlugin()],
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      // Keep the runtime chunk separated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      // https://github.com/facebook/create-react-app/issues/5358
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`,
      },
  },
  performance: false,
};
