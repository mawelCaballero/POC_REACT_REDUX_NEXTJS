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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Property = function (_Component) {
    (0, _inherits3.default)(Property, _Component);

    function Property() {
        (0, _classCallCheck3.default)(this, Property);

        return (0, _possibleConstructorReturn3.default)(this, (Property.__proto__ || (0, _getPrototypeOf2.default)(Property)).apply(this, arguments));
    }

    (0, _createClass3.default)(Property, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                id = _props.id,
                type = _props.type,
                label = _props.label,
                action = _props.action,
                value = _props.value,
                href = _props.href;

            var renderInputActionSearch = function renderInputActionSearch() {
                if (action && action.actionType === 'search') {
                    return _react2.default.createElement('input', { type: 'button', className: 'button', value: 'Search' });
                }
                return null;
            };

            return _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'small-2 large-4 columns' }, _react2.default.createElement('label', { className: 'label', htmlFor: id }, label)), _react2.default.createElement('div', { className: 'small-6 large-6 columns' }, _react2.default.createElement('input', { type: type, id: id, name: id, ref: function ref(input) {
                    _this2.textInput = input;
                }, value: value })), _react2.default.createElement('div', { className: 'small-2 large-2 columns' }, renderInputActionSearch()));
        }
    }]);

    return Property;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Property);