import { Router } from '@reach/router';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Client } from './Apollo/Client';
import { App } from './App';
import { Error } from './Error';
import { Header } from './Header';
import { ThreadContainer as Thread } from './Thread/ThreadContainer';
import { UserContainer as User } from './Users/UserContainer';

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
    <>
      <Header />
      <div className="app-main">
        <Router>
          <App default />
          <App path="/jobs" />
          <App path="/ask" />
          <App path="/best" />
          <App path="/new" />
          <App path="/show" />

          <Thread path="/thread/:storyId" />
          <User path="/user/:username" />
          <Error path="/404" />
        </Router>
      </div>
    </>
  </ApolloProvider>,
  document.getElementById('root')
);
