import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { StoryFeedPaginationContainer } from './StoriesFeed/StoriesFeedPaginationContainer';

export const App: React.SFC<RouteComponentProps> = () => (
  <div className="app-main">
    <StoryFeedPaginationContainer />
  </div>
);
