'use strict';

var utils = require('../utils/writer.js');
var CustomerAddresses = require('../service/CustomerAddressesService');

module.exports.deleteCustomerAddress = function deleteCustomerAddress (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomerAddresses.deleteCustomerAddress(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerAddress = function getCustomerAddress (req, res, next) {
  CustomerAddresses.getCustomerAddress()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerAddress_1 = function getCustomerAddress_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  CustomerAddresses.getCustomerAddress_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCustomerAddress = function postCustomerAddress (req, res, next) {
  var customerAddress = req.swagger.params['customerAddress'].value;
  CustomerAddresses.postCustomerAddress(customerAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCustomerAddress = function putCustomerAddress (req, res, next) {
  var id = req.swagger.params['id'].value;
  var customerAddress = req.swagger.params['customerAddress'].value;
  CustomerAddresses.putCustomerAddress(id,customerAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
