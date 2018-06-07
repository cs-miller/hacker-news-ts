import { Router } from '@reach/router';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Client } from './Apollo/Client';
import { App } from './App';
import { Header } from './Header';

import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['Georgia', 'serif']
});

typography.injectStyles();

import './css/index.css';

render(
  <ApolloProvider client={Client}>
    <Header />
    <Router>
      <App path="/" />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
