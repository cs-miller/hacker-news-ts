

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NodeQuery
// ====================================================

export interface NodeQuery_nodeFromHnId_User {
  __typename: "User" | "Comment" | "Job" | "Poll" | "PollOpt";
}

export interface NodeQuery_nodeFromHnId_Story {
  __typename: "Story";
  title: string | null;  // The title
}

export type NodeQuery_nodeFromHnId = NodeQuery_nodeFromHnId_User | NodeQuery_nodeFromHnId_Story;

export interface NodeQuery {
  nodeFromHnId: NodeQuery_nodeFromHnId | null;
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================