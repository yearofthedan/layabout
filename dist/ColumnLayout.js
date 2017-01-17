'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyles = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap'
};

var validChildren = function validChildren(children) {
  return (0, _react.isValidElement)(children) || Array.isArray(children) && !children.find(function (element) {
    return !(0, _react.isValidElement)(element);
  });
};

var validContainerTemplate = function validContainerTemplate(template) {
  return typeof template === 'string' ? !!_react.DOM[template] : true;
};

var deriveFlex = function deriveFlex(index, columns, childrenCount) {
  var columnCount = columns.length;
  var width = columns.reduce(function (total, curr) {
    return curr + total;
  }, 0);

  if (columnCount === 0) {
    return 100 / childrenCount;
  }
  return columns[index % columnCount] * 100 / width;
};

var ColumnLayout = function ColumnLayout(_ref) {
  var children = _ref.children,
      columns = _ref.columns,
      container = _ref.container;

  if (!validContainerTemplate(container) || !validChildren(children)) {
    return null;
  }

  var laidOutChildren = _react2.default.Children.toArray(children).map(function (child, index) {
    return (0, _react.cloneElement)(child, {
      style: Object.assign({}, child.props.style, { flexBasis: deriveFlex(index, columns, children.length) + '%' }),
      key: index
    });
  });

  return _react2.default.createElement(container, { style: containerStyles }, laidOutChildren);
};

ColumnLayout.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]),
  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
  container: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
};

ColumnLayout.defaultProps = {
  children: [],
  columns: [],
  container: 'div'
};

exports.default = ColumnLayout;