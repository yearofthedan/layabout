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

const deriveFlex = (index, columns, childrenCount) => {
  const columnCount = columns.length;
  const width = columns.reduce((total, curr) => curr + total, 0);

  if (columnCount === 0) {
    return 100 / childrenCount;
  }
  return (columns[index % columnCount] * 100) / width;
};


const ColumnLayout = ({ children, columns, container }) => {
  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  const laidOutChildren = React.Children
    .toArray(children)
    .map((child, index) => cloneElement(child, {
      style: { ...child.props.style, flexBasis: `${deriveFlex(index, columns, children.length)}%` },
      key: index,
    }));

  return React.createElement(container, { style: containerStyles }, laidOutChildren);
};

ColumnLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]),
  columns: React.PropTypes.arrayOf(React.PropTypes.number),
  container: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
  ]),
};

ColumnLayout.defaultProps = {
  children: [],
  columns: [],
  container: 'div',
};

export default ColumnLayout;
