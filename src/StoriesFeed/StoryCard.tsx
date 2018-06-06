import { Card, Elevation, Classes } from '@blueprintjs/core';
import gql from 'graphql-tag';
import React from 'react';

import { toBaseURL } from '../utils';
import { StoryCard_story as StoryCard_story_fragment } from './__generated__/StoryCard_story';

interface Props {
  story: StoryCard_story_fragment;
}

export const StoryCard: React.SFC<Props> = props => (
  <Card elevation={Elevation.FOUR} interactive={true}>
    <h5>
      <a href={props.story.url}>{props.story.title}</a>
    </h5>
    <h6 className={Classes.TEXT_MUTED}>{`(${toBaseURL(props.story.url)})`}</h6>
  </Card>
);

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
