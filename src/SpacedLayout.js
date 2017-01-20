import React, { isValidElement, DOM } from 'react';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const deriveSpacing = spacing => {
  switch (spacing) {
    case 'begin': return 'flex-start';
    case 'middle': return 'center';
    case 'end': return 'flex-end';
    case 'around': return 'space-around';
    case 'between': return 'space-between';
    default: return 'between';
  }
};

const validChildren = children => isValidElement(children) ||
        (Array.isArray(children) &&
        !children.find(element => !isValidElement(element))
      );

const validContainerTemplate = template => (typeof template === 'string' ? !!DOM[template] : true);

const SpacedLayout = ({ children, container, spacing }) => {
  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  return React.createElement(container, {
    style: { ...containerStyles, justifyContent: deriveSpacing(spacing) },
  }, children);
};

SpacedLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  container: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]),
  spacing: React.PropTypes.string,
};

SpacedLayout.defaultProps = {
  children: [],
  container: 'div',
  spacing: 'between',
};

export default SpacedLayout;
