'use strict';

var utils = require('../utils/writer.js');
var ProductCategories = require('../service/ProductCategoriesService');

module.exports.deleteProductCategory = function deleteProductCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductCategories.deleteProductCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductCategory = function getProductCategory (req, res, next) {
  ProductCategories.getProductCategory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductCategory_1 = function getProductCategory_1 (req, res, next) {
  var id = req.swagger.params['id'].value;
  ProductCategories.getProductCategory_1(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProductCategory = function postProductCategory (req, res, next) {
  var productCategory = req.swagger.params['productCategory'].value;
  ProductCategories.postProductCategory(productCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProductCategory = function putProductCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  var productCategory = req.swagger.params['productCategory'].value;
  ProductCategories.putProductCategory(id,productCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
