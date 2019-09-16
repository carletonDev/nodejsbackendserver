'use strict';

var utils = require('../utils/writer.js');
var Customers = require('../service/CustomersService');

module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
  var id = req.swagger.params['id'].value;
  Customers.deleteCustomer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomer = function getCustomer (req, res, next) {
  Customers.getCustomer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomer_1 = function getCustomer_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  Customers.getCustomer_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCustomer = function postCustomer (req, res, next) {
  var customer = req.swagger.params['customer'].value;
  Customers.postCustomer(customer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCustomer = function putCustomer (req, res, next) {
  var id = req.swagger.params['id'].value;
  var customer = req.swagger.params['customer'].value;
  Customers.putCustomer(id,customer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
