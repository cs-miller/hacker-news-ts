import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Client } from './Apollo/Client';
import { App } from './App';

import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css';

render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
