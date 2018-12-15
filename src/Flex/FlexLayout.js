import { createElement } from 'react';
import PropTypes from 'prop-types';
import layout from './layout';
import { POSITIONS, DIRECTIONS } from '../styleConstants';
import validContainer from '../containerValidation';

const {
  oneOfType, arrayOf, node, string, number,
} = PropTypes;

const FlexLayout = ({
  children, sizes, container, alignCrossAxis, direction, style,
}) => (
  createElement(container, {
    style: {
      ...style,
      display: 'flex',
      flexDirection: DIRECTIONS[direction] || DIRECTIONS.default,
      alignContent: POSITIONS.start,
      flexWrap: 'wrap',
      alignItems: POSITIONS[alignCrossAxis] || POSITIONS.default,
    },
  }, layout(children, sizes))
);

FlexLayout.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
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
