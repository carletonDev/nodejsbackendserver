'use strict';

var utils = require('../utils/writer.js');
var ProductModels = require('../service/ProductModelsService');

module.exports.deleteProductModel = function deleteProductModel (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductModels.deleteProductModel(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductModel = function getProductModel (req, res, next) {
  ProductModels.getProductModel()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductModel_1 = function getProductModel_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductModels.getProductModel_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProductModel = function postProductModel (req, res, next) {
  var productModel = req.swagger.params['productModel'].value;
  ProductModels.postProductModel(productModel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProductModel = function putProductModel (req, res, next) {
  var id = req.swagger.params['id'].value;
  var productModel = req.swagger.params['productModel'].value;
  ProductModels.putProductModel(id,productModel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
