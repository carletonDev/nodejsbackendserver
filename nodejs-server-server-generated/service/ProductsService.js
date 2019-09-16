'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteProduct = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getProduct = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "productModel" : {
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
  },
  "thumbNailPhoto" : "thumbNailPhoto",
  "productId" : 9,
  "color" : "color",
  "weight" : 9.018348186070783,
  "productNumber" : "productNumber",
  "thumbnailPhotoFileName" : "thumbnailPhotoFileName",
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "standardCost" : 6.683562403749608,
  "sellEndDate" : "2000-01-23T04:56:07.000+00:00",
  "productCategory" : {
    "product" : [ null, null ],
    "productCategoryId" : 6,
    "name" : "name",
    "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
    "parentProductCategoryId" : 1,
    "inverseParentProductCategory" : [ null, null ],
    "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "productCategoryId" : 6,
  "size" : "size",
  "sellStartDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "salesOrderDetail" : [ null, null ],
  "productModelId" : 3,
  "discontinuedDate" : "2000-01-23T04:56:07.000+00:00",
  "listPrice" : 8.762042012749001
}, {
  "productModel" : {
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
  },
  "thumbNailPhoto" : "thumbNailPhoto",
  "productId" : 9,
  "color" : "color",
  "weight" : 9.018348186070783,
  "productNumber" : "productNumber",
  "thumbnailPhotoFileName" : "thumbnailPhotoFileName",
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "standardCost" : 6.683562403749608,
  "sellEndDate" : "2000-01-23T04:56:07.000+00:00",
  "productCategory" : {
    "product" : [ null, null ],
    "productCategoryId" : 6,
    "name" : "name",
    "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
    "parentProductCategoryId" : 1,
    "inverseParentProductCategory" : [ null, null ],
    "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "productCategoryId" : 6,
  "size" : "size",
  "sellStartDate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "salesOrderDetail" : [ null, null ],
  "productModelId" : 3,
  "discontinuedDate" : "2000-01-23T04:56:07.000+00:00",
  "listPrice" : 8.762042012749001
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
exports.getProduct_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * product Product  (optional)
 * no response value expected for this operation
 **/
exports.postProduct = function(product) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * product Product  (optional)
 * no response value expected for this operation
 **/
exports.putProduct = function(id,product) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

