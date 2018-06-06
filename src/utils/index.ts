export const toBaseURL = (url: string): string =>
  url.replace(/(http(s)?:\/\/)|(www\.)|(\/.*){1}/g, '');
