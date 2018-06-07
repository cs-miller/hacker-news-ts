import moment from 'moment';

export const toBaseURL = (url: string): string =>
  url.replace(/(http(s)?:\/\/)|(www\.)|(\/.*){1}/g, '');

export const fromNow = (time: number): string => moment.unix(time).fromNow();

export const usernameColor = (time: number) =>
  moment
    .unix(time)
    .add(14, 'days')
    .isSameOrAfter(moment())
    ? '#5a8b34'
    : '#000000';
