import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { pathOr } from 'ramda';
import React from 'react';

import { fromNow, toBaseURL, usernameColor } from '../utils';
import { StoryCard_story as StoryCard_story_type } from './__generated__/StoryCard_story';

export const StoryCard_story = gql`
  fragment StoryCard_story on Story {
    id
    hnId
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
interface TitleProps {
  url: string;
  title: string;
  hnId: string;
}

export const StoryCard: React.SFC<Props> = props => {
  return (
    <li className="card">
      <Title
        url={getUrl(props)}
        title={getTitle(props)}
        hnId={props.story.hnId}
      />
      <p>
        {props.story.score} points by{' '}
        <Link to={`/user/${props.story.by.hnId}`}>
          {' '}
          <strong style={{ color: usernameColor(props.story.by.created) }}>
            {props.story.by.hnId}
          </strong>
        </Link>{' '}
        {fromNow(getTime(props))} | {props.story.descendants || 0} comments
      </p>
    </li>
  );
};

const Title: React.SFC<TitleProps> = ({ url, title, hnId }) => (
  <>
    <strong>
      {url ? (
        <a href={url}>{title}</a>
      ) : (
        <Link to={`/thread/${hnId}`}>{title}</Link>
      )}
    </strong>{' '}
    {url ? <span>({toBaseURL(url)})</span> : null}
  </>
);

const getUrl = (props: Props): string =>
  pathOr<string>('', ['story', 'url'], props);

const getTime = (props: Props): number =>
  pathOr<number>(Date.now(), ['story', 'time'], props);

const getTitle = (props: Props): string =>
  pathOr<string>('', ['story', 'title'], props);
