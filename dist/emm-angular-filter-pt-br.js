/*!
 * emm-angular-utils v1.0.1 (https://github.com/emalherbi/angular-modules)
 * Copyright 2018 Eduardo Malherbi Martins <emalherbi@gmail.com> (http://emalherbi.com/)
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
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
 * [Tel]
 */
app.filter('formatTel', function() {
  return function(text) {
    if (text) {
      if (text.length <= 10) {
        // (99) 9999-9999
        return '(' + text.substr(0, 2) + ') ' + text.substr(2, 4) + '-' + text.substr(6, 4);
      } else {
        // (99) 99999-9999
        return '(' + text.substr(0, 2) + ') ' + text.substr(2, 5) + '-' + text.substr(7, 4);
      }
    }
    return '';
  };
});
/**
 * [CPF/CNPJ]
 */
app.filter('formatCnpjCpf', function() {
  return function(text) {
    if (text) {
      if (text.length <= 11) {
        // 999.999.999-99
        return text.substr(0, 3) + '.' + text.substr(3, 3) + '.' + text.substr(6, 3) + '-' + text.substr(9, 2);
      } else {
        // 99.999.999/9999-99
        return text.substr(0, 2) + '.' + text.substr(2, 3) + '.' + text.substr(5, 3) + '/' + text.substr(8, 4) + '-' + text.substr(12, 2);
      }
    }
    return '';
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