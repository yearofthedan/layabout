import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import {
  array,
  func,
  oneOfType,
  shape,
  string,
} from 'prop-types';

const extractDisplayName = (token) => {
  if (token.type) {
    return token.type.displayName || token.type.name || token.type;
  }
  return token;
};

const processTemplate = (layout) => {
  const template = {};

  template.keys = new Set(layout.match(/\w+/g));

  const rows = layout
    .trim()
    .match(/(.)+/g);
  template.string = rows && rows
    .reduce(
      (prior, entry, index) => `${prior}${index > 0 ? '\n' : ''}"${entry}"`,
      '',
    );
  return template;
};

const orDefault = entry => (Number.isInteger(entry) ? `${entry}fr` : entry);

const containerStyle = (widths, heights, template, columnGap, rowGap) => ({
  display: 'grid',
  gridTemplateAreas: template,
  gridTemplateColumns: widths.map(orDefault).join(' '),
  gridTemplateRows: heights.map(orDefault).join(' '),
  gridColumnGap: columnGap,
  gridRowGap: rowGap,
});

const cloneWithStyles = (child, index, keys) => cloneElement(child, {
  style: {
    gridArea: keys.has(extractDisplayName(child)) && extractDisplayName(child),
    ...child.props.style,
  },
  key: index,
});

const Grid = ({
  container = 'div',
  widths = ['auto'],
  heights = ['auto'],
  columnGap,
  rowGap,
  layout = '',
  children,
  style,
  ...rest
}) => {
  const template = processTemplate(layout);
  return (
    createElement(container, {
      style: {
        ...style,
        ...containerStyle(widths, heights, template.string, columnGap, rowGap),
      },
      ...rest,
    },
    template.keys.size === 0
      ? children
      : Children
        .toArray(children)
        .filter(isValidElement)
        .map((child, index) => cloneWithStyles(child, index, template.keys)))
  );
};

Grid.propTypes = {
  container: oneOfType([
    func,
    string,
    shape({ render: func.isRequired }),
  ]),
  columnGap: string,
  rowGap: string,
  layout: string,
  widths: array,
  height: array,
};

export default Grid;
