import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { Client } from './Apollo/Client';
import { App } from './App';

render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
