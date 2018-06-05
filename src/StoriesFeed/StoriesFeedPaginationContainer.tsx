import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import {
  FeedType,
  StoriesFeedPaginationQuery,
  StoriesFeedPaginationQueryVariables
} from './__generated__/StoriesFeedPaginationQuery';
import { StoryCard, StoryCard_story } from './StoryCard';

class TQuery extends Query<
  StoriesFeedPaginationQuery,
  StoriesFeedPaginationQueryVariables
> {}

const query = gql`
  query StoriesFeedPaginationQuery(
    $type: FeedType
    $count: Int
    $cursor: String
  ) {
    storyFeed(type: $type, first: $count, after: $cursor) {
      edges {
        cursor
        node {
          id
          ...StoryCard_story
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${StoryCard_story}
`;

export const StoryFeedPaginationContainer = () => (
  <TQuery
    query={query}
    variables={{
      type: FeedType.TOP,
      count: 10
    }}
  >
    {({ data, loading, fetchMore }) => {
      if (loading) return <pre>Loading...</pre>;
      return data.storyFeed.edges.map(edge => <StoryCard story={edge.node} />);
    }}
  </TQuery>
);
