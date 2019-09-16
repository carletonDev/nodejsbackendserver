'use strict';


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.delete = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.get = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
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
 * returns String
 **/
exports.get_0 = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * value String  (optional)
 * no response value expected for this operation
 **/
exports.post = function(value) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * value String  (optional)
 * no response value expected for this operation
 **/
exports.put = function(id,value) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

