import { createElement } from 'react';
import PropTypes from 'prop-types';
import { POSITIONS, DIRECTIONS, SPACING } from '../styleConstants';
import validContainer from '../containerValidation';

const {
  oneOfType, arrayOf, node, string,
} = PropTypes;

const SpacedLayout = ({
  children, container, spacing, alignCrossAxis, direction, style,
}) => createElement(container, {
  style: {
    ...style,
    flexDirection: DIRECTIONS[direction] || DIRECTIONS.default,
    display: 'flex',
    alignItems: POSITIONS[alignCrossAxis] || POSITIONS.default,
    justifyContent: SPACING[spacing] || SPACING.default,
  },
}, children);

SpacedLayout.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  alignCrossAxis: string,
  container: validContainer,
  direction: string,
  spacing: string,
};

SpacedLayout.defaultProps = {
  children: [],
  container: 'div',
  spacing: 'between',
  direction: 'row',
  alignCrossAxis: 'center',
};

export default SpacedLayout;
