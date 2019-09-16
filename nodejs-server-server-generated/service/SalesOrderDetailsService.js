'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteSalesOrderDetail = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getSalesOrderDetail = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "salesOrderId" : 1,
  "unitPrice" : 4.965218492984954,
  "product" : {
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
  },
  "productId" : 1,
  "unitPriceDiscount" : 5.025004791520295,
  "lineTotal" : 9.965781217890562,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "orderQty" : 7,
  "salesOrderDetailId" : 6,
  "rowguid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "salesOrderId" : 1,
  "unitPrice" : 4.965218492984954,
  "product" : {
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
  },
  "productId" : 1,
  "unitPriceDiscount" : 5.025004791520295,
  "lineTotal" : 9.965781217890562,
  "modifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "orderQty" : 7,
  "salesOrderDetailId" : 6,
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
exports.getSalesOrderDetail_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * salesOrderDetail SalesOrderDetail  (optional)
 * no response value expected for this operation
 **/
exports.postSalesOrderDetail = function(salesOrderDetail) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * salesOrderDetail SalesOrderDetail  (optional)
 * no response value expected for this operation
 **/
exports.putSalesOrderDetail = function(id,salesOrderDetail) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

