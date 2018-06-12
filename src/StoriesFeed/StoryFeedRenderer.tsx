import { ApolloQueryResult } from 'apollo-client';
import React from 'react';

import {
  StoriesFeedPaginationQuery,
  StoriesFeedPaginationQuery_storyFeed_edges
} from './__generated__/StoriesFeedPaginationQuery';
import { StoryCard } from './StoryCard';

interface Props {
  onLoadMore: () => Promise<ApolloQueryResult<StoriesFeedPaginationQuery>>;
  stories: StoriesFeedPaginationQuery_storyFeed_edges[];
  hasMore: boolean;
}

export const StoriesFeedRenderer: React.SFC<Props> = props => {
  return (
    <>
      <ol className="feed-list">
        {props.stories.map(
          edge =>
            edge.node ? <StoryCard story={edge.node} key={edge.cursor} /> : null
        )}
      </ol>
      {props.hasMore ? (
        <button className="load-more" onClick={props.onLoadMore}>
          <h1>Load More</h1>
        </button>
      ) : (
        <h1 className="load-more">The End?</h1>
      )}
    </>
  );
};
