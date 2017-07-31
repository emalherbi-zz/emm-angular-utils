'use strict';
/**
 * [Filter]
 * @required {[momentjs]}
 */
var app = angular.module('emm-filter-pt-br', []);
/**
 * [String]
 */
app.filter('formatStringUpperCase', function() {
  return function(item) {
    return item.toUpperCase();
  };
});
/**
 * [Number]
 */
app.filter('formatNumberToString', function() {
  return function(text) {
    return text && Zeros.addLeft(text.toString(), '2');
  };
});
/**
 * [Date]
 */
app.filter('formatDateBr', function() {
  return function(text) {
    return text && moment(text).format('DD/MM/YYYY');
  };
});
//
app.filter('formatDateTimeBr', function() {
  return function(text) {
    return text && moment(text).format('DD/MM/YYYY HH:mm:ss');
  };
});
/**
 * [Base 64]
 */
app.filter('formatBase64Decode', function() {
  return function(text) {
    return text && atob(text);
  };
});
//
app.filter('formatBase64Encode', function() {
  return function(text) {
    return text && btoa(text);
  };
});
/**
 * [Utils]
 */
var Zeros = {
  addLeft: function(str, max) {
    str = String(str);
    return (str.length < max) ? Zeros.addLeft('0' + str, max) : str;
  }
};
