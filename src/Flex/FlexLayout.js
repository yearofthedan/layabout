import { createElement } from 'react';
import {
  arrayOf,
  func,
  node,
  number,
  oneOfType,
  string,
  shape,
} from 'prop-types';
import layout from './layout';
import { POSITIONS, DIRECTIONS } from '../styleConstants';

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
  container: oneOfType([
    func,
    string,
    shape({ render: func.isRequired }),
  ]),
};

FlexLayout.defaultProps = {
  children: [],
  sizes: [],
  container: 'div',
  direction: 'row',
  alignCrossAxis: 'middle',
};

export default FlexLayout;
