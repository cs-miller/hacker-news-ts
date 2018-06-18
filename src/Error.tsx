import { RouteComponentProps } from '@reach/router';
import React from 'react';

export const Error: React.SFC<RouteComponentProps> = () => (
  <div>
    <pre>Something went wrong...</pre>
  </div>
);
