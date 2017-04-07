'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboard = function (_React$Component) {
  (0, _inherits3.default)(dashboard, _React$Component);

  function dashboard() {
    (0, _classCallCheck3.default)(this, dashboard);

    return (0, _possibleConstructorReturn3.default)(this, (dashboard.__proto__ || (0, _getPrototypeOf2.default)(dashboard)).apply(this, arguments));
  }

  (0, _createClass3.default)(dashboard, [{
    key: 'render',
    value: function render() {
      debugger;
      return _react2.default.createElement(_Page2.default, { title: 'DashBoard' });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store;

      store.dispatch((0, _store.startPage)('dashboard', 'quotes?_start=0&_start=0&_num=1000'));
    }
  }]);

  return dashboard;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(dashboard);