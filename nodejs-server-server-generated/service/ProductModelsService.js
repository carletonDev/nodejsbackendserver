'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteProductModel = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getProductModel = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "product" : [ null, null ],
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "productModelId" : 2,
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productModelProductDescription" : [ {
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
  } ],
  "catalogDescription" : "catalogDescription"
}, {
  "product" : [ null, null ],
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "productModelId" : 2,
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "productModelProductDescription" : [ {
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
  } ],
  "catalogDescription" : "catalogDescription"
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
exports.getProductModel_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productModel ProductModel  (optional)
 * no response value expected for this operation
 **/
exports.postProductModel = function(productModel) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * productModel ProductModel  (optional)
 * no response value expected for this operation
 **/
exports.putProductModel = function(id,productModel) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

