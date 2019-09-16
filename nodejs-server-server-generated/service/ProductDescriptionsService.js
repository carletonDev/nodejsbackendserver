'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteProductDescription = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getProductDescription = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "productDescriptionId" : 5,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productModelProductDescription" : [ null, null ]
}, {
  "productDescriptionId" : 5,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productModelProductDescription" : [ null, null ]
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
exports.getProductDescription_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productDescription ProductDescription  (optional)
 * no response value expected for this operation
 **/
exports.postProductDescription = function(productDescription) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * productDescription ProductDescription  (optional)
 * no response value expected for this operation
 **/
exports.putProductDescription = function(id,productDescription) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

