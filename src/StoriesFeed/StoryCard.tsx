import gql from 'graphql-tag';
import React from 'react';
import { StoryCard_story as StoryCard_story_fragment } from './__generated__/StoryCard_story';

interface Props {
  story: StoryCard_story_fragment;
}

export const StoryCard: React.SFC<Props> = props => {
  return (
    <div>
      <title>{props.story.title}</title>
    </div>
  );
};

export const StoryCard_story = gql`
  fragment StoryCard_story on Story {
    id
    title
    url
    time
    score
    descendants
    by {
      id
      hnId
      created
    }
  }
`;
