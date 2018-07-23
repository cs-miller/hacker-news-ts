import { Redirect, RouteComponentProps } from '@reach/router';
import gql from 'graphql-tag';
import { propOr } from 'ramda';
import React from 'react';
import { Query } from 'react-apollo';

import { ThreadQuery, ThreadQueryVariables } from './__generated__/ThreadQuery';

class TypedApolloQuery extends Query<ThreadQuery, ThreadQueryVariables> {}

const query = gql`
  query ThreadQuery($storyId: ID!) {
    nodeFromHnId(id: $storyId, isUserId: false) {
      ... on Story {
        title
        text
      }
    }
  }
`;

export const ThreadContainer: React.SFC<
  RouteComponentProps<{ storyId: string }>
> = props => (
  <TypedApolloQuery
    query={query}
    variables={{
      storyId: propOr('', 'storyId', props)
    }}
  >
    {({ data, loading, error }) => {
      if (loading) return <pre>Loading...</pre>;
      if (error) return <Redirect to="/404" />;
      return <pre>Not implemented</pre>;
    }}
  </TypedApolloQuery>
);
