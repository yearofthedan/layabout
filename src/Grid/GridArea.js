import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';

const extractDisplayName = child => child.type.name || child.type;

const processTemplate = (template) => {
  const rows = template
    .trim()
    .match(/(.)+/g);
  return rows && rows
    .reduce(
      (prior, entry, index) => `${prior}${index > 0 ? '\n' : ''}"${entry}"`,
      '',
    );
};

const orDefault = entry => (Number.isInteger(entry) ? `${entry}fr` : entry);

const containerStyle = (widths, heights, layout) => ({
  display: 'grid',
  gridTemplateAreas: processTemplate(layout),
  gridTemplateColumns: widths.map(orDefault).join(' '),
  gridTemplateRows: heights.map(orDefault).join(' '),
});

const cloneWithStyles = (child, index) => cloneElement(child, {
  style: {
    ...child.props.style,
    gridArea: extractDisplayName(child),
  },
  key: index,
});

const GridArea = ({
  container = 'div',
  widths = ['auto'],
  heights = ['auto'],
  layout = '',
  children,
  style,
}) => (
  createElement(container, {
    style: {
      ...style,
      ...containerStyle(widths, heights, layout),
    },
  },
  Children
    .toArray(children)
    .filter(isValidElement)
    .map(cloneWithStyles))
);

GridArea.propTypes = {
  container: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  layout: PropTypes.string,
  widths: PropTypes.array,
  height: PropTypes.array,
};

export default GridArea;
