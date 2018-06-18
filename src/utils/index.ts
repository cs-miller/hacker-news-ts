import differenceInWeeks from 'date-fns/differenceInWeeks';
import formatDistance from 'date-fns/formatDistance';

export const toBaseURL = (url: string): string =>
  url.replace(/(http(s)?:\/\/)|(www\.)|(\/.*){1}/g, '');

export const fromNow = (seconds: number): string =>
  `${formatDistance(new Date(), new Date(seconds * 1000))} ago`;

// new users have green names
export const usernameColor = (seconds: number) =>
  differenceInWeeks(new Date(), new Date(seconds * 1000)) <= 2
    ? '#5a8b34'
    : '#000000';
