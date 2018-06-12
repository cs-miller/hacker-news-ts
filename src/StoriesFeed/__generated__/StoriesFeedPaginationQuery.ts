

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StoriesFeedPaginationQuery
// ====================================================

export interface StoriesFeedPaginationQuery_storyFeed_edges_node_by {
  __typename: "User";
  id: string;       // The globally unique relay id
  hnId: string;     // The user's unique username, case sensative
  created: number;  // Creation date of the user, in Unix Time
}

export interface StoriesFeedPaginationQuery_storyFeed_edges_node {
  __typename: "Story";
  id: string;                                              // The globally unique relay id
  title: string | null;                                    // The title
  url: string | null;                                      // The url of the story
  time: number | null;                                     // Creation date of the story, in Unix Time
  score: number | null;                                    // The story's score
  descendants: number | null;                              // The total comment count
  by: StoriesFeedPaginationQuery_storyFeed_edges_node_by;  // The user who created the item
}

export interface StoriesFeedPaginationQuery_storyFeed_edges {
  __typename: "StoryEdge";
  cursor: string;                                                // A cursor for use in pagination.
  node: StoriesFeedPaginationQuery_storyFeed_edges_node | null;  // The item at the end of the edge
}

export interface StoriesFeedPaginationQuery_storyFeed_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;      // When paginating forwards, are there more items?
  endCursor: string | null;  // When paginating forwards, the cursor to continue.
}

export interface StoriesFeedPaginationQuery_storyFeed {
  __typename: "StoryConnection";
  edges: (StoriesFeedPaginationQuery_storyFeed_edges | null)[] | null;  // A list of edges.
  pageInfo: StoriesFeedPaginationQuery_storyFeed_pageInfo;              // Information to aid in pagination.
}

export interface StoriesFeedPaginationQuery {
  storyFeed: StoriesFeedPaginationQuery_storyFeed | null;
}

export interface StoriesFeedPaginationQueryVariables {
  type?: FeedType | null;
  count?: number | null;
  cursor?: string | null;
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

export enum FeedType {
  ASK = "ASK",
  BEST = "BEST",
  JOB = "JOB",
  NEW = "NEW",
  SHOW = "SHOW",
  TOP = "TOP",
}

//==============================================================
// END Enums and Input Objects
//==============================================================