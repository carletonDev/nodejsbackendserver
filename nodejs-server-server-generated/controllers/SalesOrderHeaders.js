'use strict';

var utils = require('../utils/writer.js');
var SalesOrderHeaders = require('../service/SalesOrderHeadersService');

module.exports.deleteSalesOrderHeader = function deleteSalesOrderHeader (req, res, next) {
  var id = req.swagger.params['id'].value;
  SalesOrderHeaders.deleteSalesOrderHeader(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSalesOrderHeader = function getSalesOrderHeader (req, res, next) {
  SalesOrderHeaders.getSalesOrderHeader()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSalesOrderHeader_1 = function getSalesOrderHeader_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  SalesOrderHeaders.getSalesOrderHeader_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSalesOrderHeader = function postSalesOrderHeader (req, res, next) {
  var salesOrderHeader = req.swagger.params['salesOrderHeader'].value;
  SalesOrderHeaders.postSalesOrderHeader(salesOrderHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSalesOrderHeader = function putSalesOrderHeader (req, res, next) {
  var id = req.swagger.params['id'].value;
  var salesOrderHeader = req.swagger.params['salesOrderHeader'].value;
  SalesOrderHeaders.putSalesOrderHeader(id,salesOrderHeader)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
