import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { FeedType } from './StoriesFeed/__generated__/StoriesFeedPaginationQuery';
import { StoryFeedPaginationContainer } from './StoriesFeed/StoriesFeedPaginationContainer';

export const App: React.SFC<RouteComponentProps> = props => {
  let type: FeedType;
  switch (props.path) {
    case '/jobs':
      type = FeedType.JOB;
      break;
    case '/ask':
      type = FeedType.ASK;
      break;
    case '/best':
      type = FeedType.BEST;
      break;
    case '/new':
      type = FeedType.NEW;
      break;
    case '/show':
      type = FeedType.SHOW;
      break;
    default:
      type = FeedType.TOP;
      break;
  }

  return <StoryFeedPaginationContainer type={type} />;
};
