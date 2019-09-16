'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var id = req.swagger.params['id'].value;
  Products.deleteProduct(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct = function getProduct (req, res, next) {
  Products.getProduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct_1 = function getProduct_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  Products.getProduct_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProduct = function postProduct (req, res, next) {
  var product = req.swagger.params['product'].value;
  Products.postProduct(product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProduct = function putProduct (req, res, next) {
  var id = req.swagger.params['id'].value;
  var product = req.swagger.params['product'].value;
  Products.putProduct(id,product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
