import React, { cloneElement, isValidElement, DOM } from 'react';

const containerStyles = {
  display: 'flex',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
};

const validChildren = children => isValidElement(children) ||
        (Array.isArray(children) &&
        !children.find(element => !isValidElement(element))
      );

const validContainerTemplate = template => (typeof template === 'string' ? !!DOM[template] : true);

const deriveFlex = (index, widths, childrenCount = 1) => {
  const widthCount = widths.length;
  const width = widths.reduce((total, curr) => curr + total, 0);

  if (widthCount === 0) {
    return 100 / childrenCount;
  }
  return (widths[index % widthCount] * 100) / width;
};

const deriveCrossAlignment = alignment => {
  switch (alignment) {
    case 'begin': return 'flex-start';
    case 'middle': return 'center';
    case 'end': return 'flex-end';
    default: return 'center';
  }
};

const FlexLayout = ({ children, widths, container, alignCrossAxis }) => {
  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  const laidOutChildren = React.Children
    .toArray(children)
    .map((child, index) => cloneElement(child, {
      style: { ...child.props.style, flex: `0 0 ${deriveFlex(index, widths, children.length)}%` },
      key: index,
    }));

  return React.createElement(container, {
    style: { ...containerStyles, alignItems: deriveCrossAlignment(alignCrossAxis) },
  }, laidOutChildren);
};

FlexLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  widths: React.PropTypes.arrayOf(React.PropTypes.number),
  alignCrossAxis: React.PropTypes.string,
  container: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]),
};

FlexLayout.defaultProps = {
  children: [],
  widths: [],
  container: 'div',
  alignCrossAxis: 'middle',
};

export default FlexLayout;
