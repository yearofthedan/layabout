import DOM from 'react-dom-factories';

const validContainer = (props, propName, componentName) => {
  if (typeof props[propName] !== 'function' && !(typeof props[propName] === 'string' && !!DOM[props[propName]])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`,
    );
  }
  return undefined;
};

export default validContainer;
