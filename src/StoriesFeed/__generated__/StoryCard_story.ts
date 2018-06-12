

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StoryCard_story
// ====================================================

export interface StoryCard_story_by {
  __typename: "User";
  id: string;       // The globally unique relay id
  hnId: string;     // The user's unique username, case sensative
  created: number;  // Creation date of the user, in Unix Time
}

export interface StoryCard_story {
  __typename: "Story";
  id: string;                  // The globally unique relay id
  title: string | null;        // The title
  url: string | null;          // The url of the story
  time: number | null;         // Creation date of the story, in Unix Time
  score: number | null;        // The story's score
  descendants: number | null;  // The total comment count
  by: StoryCard_story_by;      // The user who created the item
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