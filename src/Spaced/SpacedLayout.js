import { PropTypes, createElement } from 'react';
import { POSITIONS, DIRECTIONS, SPACING } from '../styleConstants';
import validContainer from '../containerValidation';

const { oneOfType, arrayOf, element, string } = PropTypes;

const SpacedLayout = ({ children, container, spacing, alignCrossAxis, direction }) =>
  createElement(container, {
    style: {
      flexDirection: DIRECTIONS[direction] || DIRECTIONS.default,
      display: 'flex',
      alignItems: POSITIONS[alignCrossAxis] || POSITIONS.default,
      justifyContent: SPACING[spacing] || SPACING.default,
    },
  }, children);

SpacedLayout.propTypes = {
  children: oneOfType([element, arrayOf(element)]),
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
  alignCrossAxis: 'middle',
};

export default SpacedLayout;
