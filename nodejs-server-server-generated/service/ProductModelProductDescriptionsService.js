'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteProductModelProductDescription = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getProductModelProductDescription = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "culture" : "culture",
  "productDescriptionId" : 6,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "productModelId" : 6,
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productDescription" : {
    "productDescriptionId" : 5,
    "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
    "description" : "description",
    "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "productModelProductDescription" : [ null, null ]
  }
}, {
  "culture" : "culture",
  "productDescriptionId" : 6,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "productModelId" : 6,
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productDescription" : {
    "productDescriptionId" : 5,
    "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
    "description" : "description",
    "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "productModelProductDescription" : [ null, null ]
  }
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
exports.getProductModelProductDescription_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productModelProductDescription ProductModelProductDescription  (optional)
 * no response value expected for this operation
 **/
exports.postProductModelProductDescription = function(productModelProductDescription) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * productModelProductDescription ProductModelProductDescription  (optional)
 * no response value expected for this operation
 **/
exports.putProductModelProductDescription = function(id,productModelProductDescription) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

