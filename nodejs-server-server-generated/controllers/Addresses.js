'use strict';

var utils = require('../utils/writer.js');
var Addresses = require('../service/AddressesService');

module.exports.deleteAddress = function deleteAddress (req, res, next) {
  var id = req.swagger.params['id'].value;
  Addresses.deleteAddress(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddress = function getAddress (req, res, next) {
  Addresses.getAddress()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddress_1 = function getAddress_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  Addresses.getAddress_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAddress = function postAddress (req, res, next) {
  var address = req.swagger.params['address'].value;
  Addresses.postAddress(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAddress = function putAddress (req, res, next) {
  var id = req.swagger.params['id'].value;
  var address = req.swagger.params['address'].value;
  Addresses.putAddress(id,address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
