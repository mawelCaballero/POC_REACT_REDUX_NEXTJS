
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import resourceFactory from './utils/resourceFactory';
import thunkMiddleware from 'redux-thunk'
import transform from './utils/transform';


const initialState = {
    metadata: null,
    viewdata: null,
    properties: null,
    loading: false,
    screenId: '',
    errorMessage: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT': {
      console.log('access to init and action to load metamodel if exist');
      var screenJsonModel = require('./metamodel/' + action.screenId + '.json');
      return {...state, screenId: 'dashboard', loading: true, metadata: screenJsonModel};
    }
    case 'LOAD_PROPERTIES_FROM_RESOURCE':{
      console.log('Loading properties from API');
      return {...state, properties: action.response};
    }
    case 'TRANSFORM_DATA_VIEW':{
      console.log('Transforming data');
      let transformedData;
      if (state.metadata && state.properties) {
          return {...state, viewdata: transform(state.metadata, state.properties)};
      }
      return { ... state, viewdata: transformedData};
    }
    default: return state
  }
}

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8080 });

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))
}


export function startPage(screenId,resourceName, url){
  return (dispatch) => {
    console.log('Starting page');
    dispatch(initPage(screenId));
    if (url){
      debugger;
      resourceFactory.getResponseFromURL(url).then(function (res) {
        dispatch(loadPropertiesFromResource(res));
        dispatch(transformDataView());
      });

    }else{
      debugger;
      resourceFactory.getResponse(resourceName, {}).then(function (res) {
        dispatch(loadPropertiesFromResource(res));
        dispatch(transformDataView(url));
      });
    }
  }
}

/**
* Action for init state
*
**/
export function initPage(screenId){
    return{ type: 'INIT', screenId: screenId};
}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function loadPropertiesFromResource(response) {
  return { type: 'LOAD_PROPERTIES_FROM_RESOURCE', response };
}

export function transformDataView(url) {
  return { type: 'TRANSFORM_DATA_VIEW', url };
}
