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

const ColumnLayout = ({ children = [], columns = [], container = 'div' }) => {
  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  const deriveFlex = index => {
    const ttlColumns = columns.length;
    const width = columns.reduce((total, curr) => curr + total, 0);

    if (ttlColumns === 0) {
      return 100 / children.length;
    }
    return (columns[index % ttlColumns] * 100) / width;
  };

  const laidOutChildren = React.Children
    .toArray(children)
    .map((child, index) => cloneElement(child, {
      style: { ...child.props.style, flexBasis: `${deriveFlex(index)}%` },
      key: index,
    }));

  return React.createElement(container, { style: containerStyles }, laidOutChildren);
};

export default ColumnLayout;
