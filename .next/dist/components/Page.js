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

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_Component) {
    (0, _inherits3.default)(Page, _Component);

    function Page() {
        (0, _classCallCheck3.default)(this, Page);

        return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                viewdata = _props.viewdata;

            var renderTitle = function renderTitle() {
                debugger;
                if (viewdata !== null && viewdata.title !== null && typeof viewdata.title !== 'undefined') {
                    return _react2.default.createElement('div', null, ' ', viewdata.title, ' ');
                } else {
                    return _react2.default.createElement('div', null, ' Loading ');
                }
            };

            var renderSections = function renderSections() {
                if (viewdata && viewdata.sections) {
                    debugger;
                    return viewdata.sections.map(function (section) {
                        return _react2.default.createElement(_Section2.default, { key: section.title, title: section.title, properties: section.properties });
                    });
                } else {
                    return _react2.default.createElement('div', null, ' ...be pacience ');
                }
            };

            return _react2.default.createElement('div', { className: 'page-title' }, _react2.default.createElement('h1', null, ' ', renderTitle(), ' '), renderSections());
        }
    }]);

    return Page;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Page);