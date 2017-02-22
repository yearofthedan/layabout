import validContainer from '../containerValidation';

describe('containerValidation', () => {
  const componentName = 'someComponent';
  const propName = 'somePropName';
  const props = [];

  it('accepts a function', () => {
    props[propName] = () => {};
    const result = validContainer(props, propName, componentName);
    expect(result).toBeUndefined();
  });

  it('accepts a known DOM string', () => {
    props[propName] = 'div';
    const result = validContainer(props, propName, componentName);
    expect(result).toBeUndefined();
  });

  it('returns an error for an unknown DOM string', () => {
    props[propName] = 'divlle';
    const result = validContainer(props, propName, componentName);
    expect(result).not.toBeUndefined();
  });

  it('returns an error if not a function or a string', () => {
    props[propName] = {};
    const result = validContainer(props, propName, componentName);
    expect(result).not.toBeUndefined();
  });
});
