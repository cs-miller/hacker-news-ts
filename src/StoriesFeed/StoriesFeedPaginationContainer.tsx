import gql from 'graphql-tag';
import { pathOr } from 'ramda';
import React from 'react';
import { Query } from 'react-apollo';

import {
  FeedType,
  StoriesFeedPaginationQuery,
  StoriesFeedPaginationQuery_storyFeed_edges,
  StoriesFeedPaginationQuery_storyFeed_pageInfo,
  StoriesFeedPaginationQueryVariables
} from './__generated__/StoriesFeedPaginationQuery';
import { StoryCard_story } from './StoryCard';
import { StoriesFeedRenderer } from './StoryFeedRenderer';

class TypedApolloQuery extends Query<
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

export const StoriesFeedPaginationContainer: React.SFC<{
  type: FeedType;
}> = props => (
  <TypedApolloQuery
    query={query}
    variables={{
      type: props.type,
      count: 15
    }}
  >
    {({ data, loading, fetchMore }) => {
      if (loading) return <pre>Loading...</pre>;
      return (
        <StoriesFeedRenderer
          stories={getEdges(data)}
          hasMore={getPageInfo(data).hasNextPage}
          onLoadMore={() =>
            fetchMore({
              query,
              variables: {
                cursor: getPageInfo(data).endCursor,
                count: 30,
                type: props.type
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = getEdges(fetchMoreResult);
                const pageInfo = getPageInfo(fetchMoreResult);

                return newEdges.length
                  ? {
                      storyFeed: {
                        __typename: 'StoryConnection',
                        edges: [...getEdges(previousResult), ...newEdges],
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
  </TypedApolloQuery>
);

const getEdges = (
  data: StoriesFeedPaginationQuery | undefined
): StoriesFeedPaginationQuery_storyFeed_edges[] =>
  pathOr<StoriesFeedPaginationQuery_storyFeed_edges[]>(
    [],
    ['storyFeed', 'edges'],
    data
  );

const getPageInfo = (
  data: StoriesFeedPaginationQuery | undefined
): StoriesFeedPaginationQuery_storyFeed_pageInfo =>
  pathOr<StoriesFeedPaginationQuery_storyFeed_pageInfo>(
    { __typename: 'PageInfo', hasNextPage: false, endCursor: null },
    ['storyFeed', 'pageInfo'],
    data
  );
