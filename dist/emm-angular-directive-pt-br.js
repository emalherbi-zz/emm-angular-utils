/*!
 * emm-angular-utils v1.0.2 (https://github.com/emalherbi/angular-modules)
 * Copyright 2018 Eduardo Malherbi Martins <emalherbi@gmail.com> (http://emalherbi.com/)
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
'use strict';
/**
 * [Filter]
 * @required {[momentjs]}
 */
var app = angular.module('emm-directive-pt-br', []);
/**
 * [CURRENCY BR]
 */
app.directive('currencyBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      scope.$watch(attrs['ngModel'], applyMask);
      //
      // var isInit = true;
      // element.bind("keydown", function(event) {
      //   isInit = false;
      // });
      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        value = value.replace(/(\d)(\d{2})$/, '$1.$2');
        // if (isInit) {
        //   value = Number(value).toFixed(2);
        // }
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
