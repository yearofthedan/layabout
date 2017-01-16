import React, { cloneElement, isValidElement } from 'react';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const childStyles = {
  flexGrow: '1',
};

const validChildren = children => isValidElement(children) ||
        (Array.isArray(children) &&
        !children.find(element => !isValidElement(element))
      );

const ColumnLayout = ({ children = [], containerTemplate = 'div' }) =>
validChildren(children) &&
(
  React.createElement(
    containerTemplate,
    { style: containerStyles },
    React.Children.toArray(children).map((child, index) => cloneElement(child, {
      style: { ...childStyles, ...child.props.style },
      key: index,
    }),
    ),
  )
);

export default ColumnLayout;
