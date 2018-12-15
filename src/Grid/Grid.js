import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';

const extractDisplayName = child => child.type.name || child.type;

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
    ...child.props.style,
    gridArea: keys.has(extractDisplayName(child)) && extractDisplayName(child),
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
}) => {
  const template = processTemplate(layout);
  return (
    createElement(container, {
      style: {
        ...style,
        ...containerStyle(widths, heights, template.string, columnGap, rowGap),
      },
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
  container: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  layout: PropTypes.string,
  widths: PropTypes.array,
  height: PropTypes.array,
};

export default Grid;
