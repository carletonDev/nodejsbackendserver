'use strict';

var utils = require('../utils/writer.js');
var ProductModelProductDescriptions = require('../service/ProductModelProductDescriptionsService');

module.exports.deleteProductModelProductDescription = function deleteProductModelProductDescription (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductModelProductDescriptions.deleteProductModelProductDescription(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductModelProductDescription = function getProductModelProductDescription (req, res, next) {
  ProductModelProductDescriptions.getProductModelProductDescription()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductModelProductDescription_1 = function getProductModelProductDescription_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductModelProductDescriptions.getProductModelProductDescription_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProductModelProductDescription = function postProductModelProductDescription (req, res, next) {
  var productModelProductDescription = req.swagger.params['productModelProductDescription'].value;
  ProductModelProductDescriptions.postProductModelProductDescription(productModelProductDescription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProductModelProductDescription = function putProductModelProductDescription (req, res, next) {
  var id = req.swagger.params['id'].value;
  var productModelProductDescription = req.swagger.params['productModelProductDescription'].value;
  ProductModelProductDescriptions.putProductModelProductDescription(id,productModelProductDescription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
