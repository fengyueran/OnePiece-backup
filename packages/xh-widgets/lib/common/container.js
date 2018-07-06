'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.VContainer = exports.LineContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BaseContainer = function BaseContainer(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['baseClassName', 'className', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(baseClassName, className) }, props),
    children
  );
};

BaseContainer.propTypes = {
  baseClassName: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.node, _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.node)])
};

var Container = function Container(props) {
  return _react2.default.createElement(BaseContainer, _extends({ baseClassName: 'xh-container' }, props));
};

var LineContainer = function LineContainer(props) {
  return _react2.default.createElement(BaseContainer, _extends({ baseClassName: 'xh-line-container' }, props));
};

var VContainer = function VContainer(props) {
  return _react2.default.createElement(BaseContainer, _extends({ baseClassName: 'xh-vertical-container' }, props));
};

exports.LineContainer = LineContainer;
exports.VContainer = VContainer;
exports.Container = Container;