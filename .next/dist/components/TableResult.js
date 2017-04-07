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

var TableResult = function (_Component) {
    (0, _inherits3.default)(TableResult, _Component);

    function TableResult() {
        (0, _classCallCheck3.default)(this, TableResult);

        return (0, _possibleConstructorReturn3.default)(this, (TableResult.__proto__ || (0, _getPrototypeOf2.default)(TableResult)).apply(this, arguments));
    }

    (0, _createClass3.default)(TableResult, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                type = _props.type,
                label = _props.label,
                cols = _props.cols,
                rows = _props.rows;

            var renderCols = cols.map(function (currentcol) {
                return _react2.default.createElement('th', null, currentcol);
            });

            var count = 0;

            var renderRows = rows.map(function (currentRow) {

                var container = [];
                var row = [];
                for (var currentColumn in cols) {
                    if (currentColumn == '6') {
                        row.push(_react2.default.createElement('td', null, count));
                    } else {
                        row.push(_react2.default.createElement('td', null, currentRow[cols[currentColumn]]));
                    }
                }
                container.push(_react2.default.createElement('tr', null, row));

                count++;

                return container;
            });

            return _react2.default.createElement('table', null, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, renderCols)), _react2.default.createElement('tbody', null, renderRows));
        }
    }]);

    return TableResult;
}(_react.Component);

exports.default = TableResult;