import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import webpack from 'webpack';

const production = process.env.NODE_ENV === 'production';

export default (): webpack.Configuration => {
  return {
    devtool: production ? 'nosources-source-map' : 'inline-source-map',
    entry: { main: './src/index.tsx' },
    mode: production ? 'production' : 'development',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /(\.js$|\.ts(x?)$)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
                plugins: ['graphql-tag', 'syntax-dynamic-import']
              }
            },
            { loader: 'ts-loader' }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('cssnano'), require('autoprefixer')]
              }
            }
          ]
        },
        {
          test: /\.(ttf|eot|svg)$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2)$/,
          use: 'url-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Hacker News',
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: production ? '[name].[hash].css' : '[name].css',
        chunkFilename: production ? '[id].[hash].css' : '[id].css'
      })
    ],
    output: {
      filename: '[name].[hash].js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/dist'
    }
  };
};
