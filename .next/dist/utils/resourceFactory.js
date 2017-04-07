'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('../constants/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  getResponse: function getResponse(resource, criteria) {
    if (typeof criteria !== 'undefined' && typeof criteria.param !== 'undefined') {
      var encodedLocation = encodeURIComponent(criteria.param.value);
    }

    var requestUrl = typeof criteria !== 'undefined' && typeof criteria.param !== 'undefined' && criteria.param.value.length > 0 ? '' + _constants.ENDPOINT_URL + resource + '?' + criteria.param.key + '=' + encodedLocation : '' + _constants.ENDPOINT_URL + resource;
    return _axios2.default.get(requestUrl).then(function (res) {
      if (res.data._links && res.data._links.item) {
        return res.data._links.item;
      }
    }, function (res) {
      throw new Error('Error get operation to ' + (_constants.ENDPOINT_URL + '/' + resource));
    });
  },

  getResponseFromURL: function getResponseFromURL(url, payload) {

    return _axios2.default.get(url).then(function (res) {
      if (res.data) {
        return res.data;
      }
    }, function (res) {
      throw new Error('Error get operation to ' + url);
    });
  },

  patch: function patch(url, payload) {

    return _axios2.default.patch(url, payload).then(function (res) {
      if (res.data) {
        return res.data;
      }
    }, function (res) {
      throw new Error('Error get operation to ' + url);
    });
  }

};