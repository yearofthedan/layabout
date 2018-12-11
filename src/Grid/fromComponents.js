const resolveToken = token => (
  token
    ? token.name || token
    : ''
);

const templated = (strings, ...tokenFns) => strings.reduce(
  (prev, curr) => `${prev}${curr}${resolveToken(tokenFns.shift())}`,
  '',
);

export default templated;
