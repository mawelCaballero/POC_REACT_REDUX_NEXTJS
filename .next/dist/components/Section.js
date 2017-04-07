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

var _Property = require('./Property');

var _Property2 = _interopRequireDefault(_Property);

var _TableResult = require('./TableResult');

var _TableResult2 = _interopRequireDefault(_TableResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_Component) {
    (0, _inherits3.default)(Section, _Component);

    function Section() {
        (0, _classCallCheck3.default)(this, Section);

        return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).apply(this, arguments));
    }

    (0, _createClass3.default)(Section, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                properties = _props.properties;

            var renderProperties = function renderProperties() {

                if (properties) {
                    return properties.map(function (property) {
                        debugger;
                        switch (property.type) {
                            case 'text':
                                return _react2.default.createElement(_Property2.default, { key: property.id,
                                    id: property.id,
                                    type: property.type,
                                    label: property.label,
                                    action: property.action,
                                    value: property.value,
                                    href: property.href
                                });
                            case 'table':
                                return _react2.default.createElement(_TableResult2.default, { key: property.id,
                                    id: property.id,
                                    type: property.type,
                                    label: property.label,
                                    cols: property.cols,
                                    rows: property.rows
                                });
                            default:
                                return _react2.default.createElement('div', null, ' Print a default property ');
                                break;
                        };
                    });
                } else {
                    return _react2.default.createElement('div', null, ' ');
                }
            };

            var _title = '';
            if (title) {
                _title = title;
            } else {
                _title = 'Default title';
            }

            return _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _title), renderProperties());
        }
    }]);

    return Section;
}(_react.Component);

exports.default = Section;