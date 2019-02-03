import { createElement } from 'react';
import {
  arrayOf,
  func,
  node,
  oneOfType,
  string,
  shape,
} from 'prop-types';
import { POSITIONS, DIRECTIONS, SPACING } from '../styleConstants';

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
  container: oneOfType([
    func,
    string,
    shape({ render: func.isRequired }),
  ]),
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
