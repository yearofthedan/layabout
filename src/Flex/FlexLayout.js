import { PropTypes, createElement } from 'react';
import layout, { POSITIONS } from './layout';
import validContainer from '../containerValidation';

const { oneOfType, arrayOf, element, string, number } = PropTypes;

const FlexLayout = ({ children, widths, container, alignCrossAxis }) => (
  createElement(container, {
    style: {
      display: 'flex',
      alignContent: POSITIONS.begin,
      flexWrap: 'wrap',
      alignItems: POSITIONS[alignCrossAxis] || POSITIONS.default,
    },
  }, layout(children, widths))
);

FlexLayout.propTypes = {
  children: oneOfType([element, arrayOf(element)]),
  widths: arrayOf(number),
  alignCrossAxis: string,
  container: validContainer,
};

FlexLayout.defaultProps = {
  children: [],
  widths: [],
  container: 'div',
  alignCrossAxis: 'middle',
};

export default FlexLayout;
