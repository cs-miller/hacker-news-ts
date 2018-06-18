import { RouteComponentProps, Redirect } from '@reach/router';
import gql from 'graphql-tag';
import { pathOr } from 'ramda';
import React from 'react';
import { Query } from 'react-apollo';

import {
  UserContainer_user,
  UserContainer_userVariables
} from './__generated__/UserContainer_user';

class TypedApolloQuery extends Query<
  UserContainer_user,
  UserContainer_userVariables
> {}

const query = gql`
  query UserContainer_user($userID: ID!) {
    nodeFromHnId(id: $userID, isUserId: true) {
      ... on User {
        id
        hnId
        created
        karma
        about
      }
    }
  }
`;

export const UserContainer: React.SFC<
  RouteComponentProps<{ username: string }>
> = props => (
  <TypedApolloQuery
    query={query}
    variables={{
      userID: pathOr('', ['username'], props)
    }}
  >
    {({ data, loading, error }) => {
      if (loading) return <pre>Loading...</pre>;
      if (error) return <Redirect to="/404" />;
      return (
        <div>
          <p>user: {pathOr('', ['nodeFromHnId', 'hnId'], data)}</p>
          <p>created: {pathOr('', ['nodeFromHnId', 'created'], data)}</p>
          <p>karma: {pathOr('', ['nodeFromHnId', 'karma'], data)}</p>
          <p>about: </p>
          <pre
            dangerouslySetInnerHTML={{
              __html: pathOr('', ['nodeFromHnId', 'about'], data)
            }}
          />
        </div>
      );
    }}
  </TypedApolloQuery>
);
