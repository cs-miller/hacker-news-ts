

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserContainer_user
// ====================================================

export interface UserContainer_user_nodeFromHnId_Story {
  __typename: "Story" | "Comment" | "Job" | "Poll" | "PollOpt";
}

export interface UserContainer_user_nodeFromHnId_User {
  __typename: "User";
  id: string;            // The globally unique relay id
  hnId: string;          // The user's unique username, case sensative
  created: number;       // Creation date of the user, in Unix Time
  karma: number;         // The uer's karma
  about: string | null;  // The user's optional self-description (HTML)
}

export type UserContainer_user_nodeFromHnId = UserContainer_user_nodeFromHnId_Story | UserContainer_user_nodeFromHnId_User;

export interface UserContainer_user {
  nodeFromHnId: UserContainer_user_nodeFromHnId | null;
}

export interface UserContainer_userVariables {
  userID: string;
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