import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';

export default (): webpack.Configuration => {
  return {
    devtool:
      process.env.NODE_ENV === 'production'
        ? 'nosources-source-map'
        : 'inline-source-map',
    entry: './src/index.tsx',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /(\.js$|\.ts(x?)$)/,
          use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
          exclude: /node_modules/
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
    ],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist')
    }
  };
};
