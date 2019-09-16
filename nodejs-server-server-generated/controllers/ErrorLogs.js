'use strict';

var utils = require('../utils/writer.js');
var ErrorLogs = require('../service/ErrorLogsService');

module.exports.deleteErrorLog = function deleteErrorLog (req, res, next) {
  var id = req.swagger.params['id'].value;
  ErrorLogs.deleteErrorLog(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getErrorLog = function getErrorLog (req, res, next) {
  ErrorLogs.getErrorLog()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getErrorLog_1 = function getErrorLog_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  ErrorLogs.getErrorLog_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postErrorLog = function postErrorLog (req, res, next) {
  var errorLog = req.swagger.params['errorLog'].value;
  ErrorLogs.postErrorLog(errorLog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putErrorLog = function putErrorLog (req, res, next) {
  var id = req.swagger.params['id'].value;
  var errorLog = req.swagger.params['errorLog'].value;
  ErrorLogs.putErrorLog(id,errorLog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
