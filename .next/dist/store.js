'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.reducer = undefined;
exports.startPage = startPage;
exports.initPage = initPage;
exports.loadPropertiesFromResource = loadPropertiesFromResource;
exports.transformDataView = transformDataView;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _remoteReduxDevtools = require('remote-redux-devtools');

var _resourceFactory = require('./utils/resourceFactory');

var _resourceFactory2 = _interopRequireDefault(_resourceFactory);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _transform = require('./utils/transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  metadata: null,
  viewdata: null,
  properties: null,
  loading: false,
  screenId: '',
  errorMessage: ''
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'INIT':
      {
        console.log('access to init and action to load metamodel if exist');
        var screenJsonModel = require('./metamodel/' + action.screenId + '.json');
        return (0, _extends3.default)({}, state, { screenId: 'dashboard', loading: true, metadata: screenJsonModel });
      }
    case 'LOAD_PROPERTIES_FROM_RESOURCE':
      {
        console.log('Loading properties from API');
        return (0, _extends3.default)({}, state, { properties: action.response });
      }
    case 'TRANSFORM_DATA_VIEW':
      {
        console.log('Transforming data');
        var transformedData = void 0;
        if (state.metadata && state.properties) {
          return (0, _extends3.default)({}, state, { viewdata: (0, _transform2.default)(state.metadata, state.properties) });
        }
        return (0, _extends3.default)({}, state, { viewdata: transformedData });
      }
    default:
      return state;
  }
};

var composeEnhancers = (0, _remoteReduxDevtools.composeWithDevTools)({ realtime: true, port: 8080 });

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

function startPage(screenId, resourceName, url) {
  return function (dispatch) {
    console.log('Starting page');
    dispatch(initPage(screenId));
    if (url) {
      debugger;
      _resourceFactory2.default.getResponseFromURL(url).then(function (res) {
        dispatch(loadPropertiesFromResource(res));
        dispatch(transformDataView());
      });
    } else {
      debugger;
      _resourceFactory2.default.getResponse(resourceName, {}).then(function (res) {
        dispatch(loadPropertiesFromResource(res));
        dispatch(transformDataView(url));
      });
    }
  };
}

/**
* Action for init state
*
**/
function initPage(screenId) {
  return { type: 'INIT', screenId: screenId };
}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
function loadPropertiesFromResource(response) {
  return { type: 'LOAD_PROPERTIES_FROM_RESOURCE', response: response };
}

function transformDataView(url) {
  return { type: 'TRANSFORM_DATA_VIEW', url: url };
}