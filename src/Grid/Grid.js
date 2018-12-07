import { createElement } from 'react';
import PropTypes from 'prop-types';

const resolveValue = entry => (Number.isInteger(entry) ? `${entry}%` : entry);

const resolveTemplateEntryFromObject = ([key, value]) => `[${key}] ${resolveValue(value)}`;

const resolveTemplateEntry = (entry) => {
  if (typeof entry === 'object') {
    return resolveTemplateEntryFromObject(Object.entries(entry)[0]);
  }

  return resolveValue(entry);
};

const containerStyle = template => ({
  display: 'grid',
  gridTemplateColumns: template.map(resolveTemplateEntry).join(' '),
});

const Grid = ({
  container: GridContainer = 'div',
  template = [],
  children,
}) => (
  createElement(
    GridContainer,
    { style: containerStyle(template) },
    children,
  )
);

Grid.propTypes = () => ({
  container: PropTypes.element,
  template: PropTypes.array,
});

export default Grid;
