import React, { cloneElement, isValidElement, DOM } from 'react';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const validChildren = children => isValidElement(children) ||
        (Array.isArray(children) &&
        !children.find(element => !isValidElement(element))
      );

const validContainerTemplate = template => (typeof template === 'string' ? !!DOM[template] : true);

const deriveFlex = (index, widths, childrenCount) => {
  const widthCount = widths.length;
  const width = widths.reduce((total, curr) => curr + total, 0);

  if (widthCount === 0) {
    return 100 / childrenCount;
  }
  return (widths[index % widthCount] * 100) / width;
};


const FlexLayout = ({ children, widths, container }) => {
  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  const laidOutChildren = React.Children
    .toArray(children)
    .map((child, index) => cloneElement(child, {
      style: { ...child.props.style, flexBasis: `${deriveFlex(index, widths, children.length)}%` },
      key: index,
    }));

  return React.createElement(container, { style: containerStyles }, laidOutChildren);
};

FlexLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  widths: React.PropTypes.arrayOf(React.PropTypes.number),
  container: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]),
};

FlexLayout.defaultProps = {
  children: [],
  widths: [],
  container: 'div',
};

export default FlexLayout;
