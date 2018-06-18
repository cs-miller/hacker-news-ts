import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { pathOr } from 'ramda';
import React from 'react';

import { fromNow, toBaseURL, usernameColor } from '../utils';
import { StoryCard_story as StoryCard_story_type } from './__generated__/StoryCard_story';

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

interface Props {
  story: StoryCard_story_type;
}

export const StoryCard: React.SFC<Props> = props => {
  return (
    <li style={{ padding: '0.5em' }}>
      <strong>
        <a href={getUrl(props)}>{props.story.title}</a>
      </strong>{' '}
      <span style={{ color: 'lightgray' }}>{`(${toBaseURL(
        getUrl(props)
      )})`}</span>
      <p>
        {props.story.score} points by{' '}
        <Link to={`/user/${props.story.by.hnId}`}>
          {' '}
          <strong style={{ color: usernameColor(props.story.by.created) }}>
            {props.story.by.hnId}
          </strong>
        </Link>{' '}
        {fromNow(getTime(props))} | {props.story.descendants} comments
      </p>
    </li>
  );
};

const getUrl = (props: Props): string =>
  pathOr<string>('', ['story', 'url'], props);

const getTime = (props: Props): number =>
  pathOr<number>(Date.now(), ['story', 'time'], props);
