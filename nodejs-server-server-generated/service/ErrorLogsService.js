'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteErrorLog = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getErrorLog = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "errorTime" : "2000-01-23T04:56:07.000+00:00",
  "errorState" : 5,
  "errorProcedure" : "errorProcedure",
  "errorSeverity" : 1,
  "errorMessage" : "errorMessage",
  "errorLine" : 5,
  "errorLogId" : 0,
  "errorNumber" : 6
}, {
  "errorTime" : "2000-01-23T04:56:07.000+00:00",
  "errorState" : 5,
  "errorProcedure" : "errorProcedure",
  "errorSeverity" : 1,
  "errorMessage" : "errorMessage",
  "errorLine" : 5,
  "errorLogId" : 0,
  "errorNumber" : 6
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
exports.getErrorLog_0 = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * errorLog ErrorLog  (optional)
 * no response value expected for this operation
 **/
exports.postErrorLog = function(errorLog) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * errorLog ErrorLog  (optional)
 * no response value expected for this operation
 **/
exports.putErrorLog = function(id,errorLog) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

