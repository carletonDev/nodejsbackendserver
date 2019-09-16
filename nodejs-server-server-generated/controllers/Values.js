'use strict';

var utils = require('../utils/writer.js');
var Values = require('../service/ValuesService');

module.exports.delete = function delete (req, res, next) {
  var id = req.swagger.params['id'].value;
  Values.delete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get = function get (req, res, next) {
  Values.get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_1 = function get_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  Values.get_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post = function post (req, res, next) {
  var value = req.swagger.params['value'].value;
  Values.post(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put = function put (req, res, next) {
  var id = req.swagger.params['id'].value;
  var value = req.swagger.params['value'].value;
  Values.put(id,value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
