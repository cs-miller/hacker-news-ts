import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import {
  FeedType,
  StoriesFeedPaginationQuery,
  StoriesFeedPaginationQueryVariables
} from './__generated__/StoriesFeedPaginationQuery';
import { StoryCard_story } from './StoryCard';
import { StoryFeedRenderer } from './StoryFeedRenderer';

class TypedQuery extends Query<
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
  <TypedQuery
    query={query}
    variables={{
      type: FeedType.TOP,
      count: 10
    }}
  >
    {({ data, loading, fetchMore }) => {
      if (loading) return <pre>Loading...</pre>;
      return (
        <StoryFeedRenderer
          stories={data}
          onLoadMore={() =>
            fetchMore({
              query,
              variables: {
                cursor: data.storyFeed.pageInfo.endCursor,
                count: 10,
                type: FeedType.TOP
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.storyFeed.edges;
                const pageInfo = fetchMoreResult.storyFeed.pageInfo;

                return newEdges.length
                  ? {
                      storyFeed: {
                        __typename: previousResult.storyFeed.__typename,
                        edges: [...previousResult.storyFeed.edges, ...newEdges],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })
          }
        />
      );
    }}
  </TypedQuery>
);
