'use strict';

var utils = require('../utils/writer.js');
var ProductDescriptions = require('../service/ProductDescriptionsService');

module.exports.deleteProductDescription = function deleteProductDescription (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductDescriptions.deleteProductDescription(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductDescription = function getProductDescription (req, res, next) {
  ProductDescriptions.getProductDescription()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductDescription_1 = function getProductDescription_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductDescriptions.getProductDescription_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProductDescription = function postProductDescription (req, res, next) {
  var productDescription = req.swagger.params['productDescription'].value;
  ProductDescriptions.postProductDescription(productDescription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProductDescription = function putProductDescription (req, res, next) {
  var id = req.swagger.params['id'].value;
  var productDescription = req.swagger.params['productDescription'].value;
  ProductDescriptions.putProductDescription(id,productDescription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
