'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteProductCategory = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getProductCategory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "product" : [ null, null ],
  "productCategoryId" : 6,
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "parentProductCategoryId" : 1,
  "inverseParentProductCategory" : [ null, null ],
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "product" : [ null, null ],
  "productCategoryId" : 6,
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "parentProductCategoryId" : 1,
  "inverseParentProductCategory" : [ null, null ],
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.getProductCategory_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productCategory ProductCategory  (optional)
 * no response value expected for this operation
 **/
exports.postProductCategory = function(productCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * productCategory ProductCategory  (optional)
 * no response value expected for this operation
 **/
exports.putProductCategory = function(id,productCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

