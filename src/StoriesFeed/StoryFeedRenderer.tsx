import { Button, Classes } from '@blueprintjs/core';
import React from 'react';

import { ApolloQueryResult } from 'apollo-client';
import { StoriesFeedPaginationQuery } from './__generated__/StoriesFeedPaginationQuery';

interface Props {
  onLoadMore: () => Promise<ApolloQueryResult<StoriesFeedPaginationQuery>>;
  stories: StoriesFeedPaginationQuery;
}

export const StoryFeedRenderer: React.SFC<Props> = props => {
  return (
    <div>
      <ol style={{ flex: 1 }}>
        {props.stories.storyFeed.edges.map(edge => (
          <li key={edge.cursor} style={{ flex: 1 }}>
            {edge.node.title}
          </li>
        ))}
      </ol>
      <Button
        onClick={props.onLoadMore}
        className={`${Classes.FILL} ${Classes.INTENT_PRIMARY}`}
      >
        Load More
      </Button>
    </div>
  );
};
