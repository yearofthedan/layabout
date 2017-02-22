import { PropTypes, createElement } from 'react';
import layout, { POSITIONS, DIRECTIONS } from './layout';
import validContainer from '../containerValidation';

const { oneOfType, arrayOf, element, string, number } = PropTypes;

const FlexLayout = ({ children, sizes, container, alignCrossAxis, direction }) => (
  createElement(container, {
    style: {
      display: 'flex',
      flexDirection: DIRECTIONS[direction] || DIRECTIONS.default,
      alignContent: POSITIONS.begin,
      flexWrap: 'wrap',
      alignItems: POSITIONS[alignCrossAxis] || POSITIONS.default,
    },
  }, layout(children, sizes))
);

FlexLayout.propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  sizes: arrayOf(number),
  alignCrossAxis: string,
  direction: string,
  container: validContainer,
};

FlexLayout.defaultProps = {
  children: [],
  sizes: [],
  container: 'div',
  direction: 'row',
  alignCrossAxis: 'middle',
};

export default FlexLayout;
