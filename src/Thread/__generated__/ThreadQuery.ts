

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ThreadQuery
// ====================================================

export interface ThreadQuery_nodeFromHnId_User {
  __typename: "User" | "Comment" | "Job" | "Poll" | "PollOpt";
}

export interface ThreadQuery_nodeFromHnId_Story {
  __typename: "Story";
  title: string | null;  // The title
  text: string | null;   // The story text (HTML)
}

export type ThreadQuery_nodeFromHnId = ThreadQuery_nodeFromHnId_User | ThreadQuery_nodeFromHnId_Story;

export interface ThreadQuery {
  nodeFromHnId: ThreadQuery_nodeFromHnId | null;
}

export interface ThreadQueryVariables {
  storyId: string;
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