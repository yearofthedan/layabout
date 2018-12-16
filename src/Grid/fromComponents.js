const resolveToken = token => (token ? token.displayName || token.name : token);

const templated = (strings, ...tokenFns) => strings.reduce(
  (prev, curr) => `${prev}${curr}${tokenFns.length > 0 ? resolveToken(tokenFns.shift()) : ''}`,
  '',
);

export default templated;
