'use strict';

var utils = require('../utils/writer.js');
var SalesOrderDetails = require('../service/SalesOrderDetailsService');

module.exports.deleteSalesOrderDetail = function deleteSalesOrderDetail (req, res, next) {
  var id = req.swagger.params['id'].value;
  SalesOrderDetails.deleteSalesOrderDetail(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSalesOrderDetail = function getSalesOrderDetail (req, res, next) {
  SalesOrderDetails.getSalesOrderDetail()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSalesOrderDetail_1 = function getSalesOrderDetail_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  SalesOrderDetails.getSalesOrderDetail_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSalesOrderDetail = function postSalesOrderDetail (req, res, next) {
  var salesOrderDetail = req.swagger.params['salesOrderDetail'].value;
  SalesOrderDetails.postSalesOrderDetail(salesOrderDetail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSalesOrderDetail = function putSalesOrderDetail (req, res, next) {
  var id = req.swagger.params['id'].value;
  var salesOrderDetail = req.swagger.params['salesOrderDetail'].value;
  SalesOrderDetails.putSalesOrderDetail(id,salesOrderDetail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
