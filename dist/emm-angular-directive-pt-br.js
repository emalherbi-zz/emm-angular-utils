/*!
 * emm-angular-utils v1.0.2 (https://github.com/emalherbi/angular-modules)
 * Copyright 2021 Eduardo Malherbi Martins <emalherbi@gmail.com> (http://emalherbi.com/)
 */
'use strict';
/**
 * [Filter]
 */
var app = angular.module('emm-directive-pt-br', []);
/**
 * [NUMBER BR]
 */
app.directive('numberBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      scope.$watch(attrs['ngModel'], applyMask);

      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
/**
 * [CURRENCY BR]
 */
app.directive('currencyBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      scope.$watch(attrs['ngModel'], applyMask);
      var isStart = true;
      element.bind("keydown", function(event) {
        isStart = false;
      });

      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        value = value.replace(/(\d)(\d{2})$/, '$1.$2');
        if ((isStart) && (value)) {
          value = Number(value).toFixed(2);
        }
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
/**
 * [CEP BR]
 */
app.directive('cepBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      attrs.$set('maxlength', '9');
      scope.$watch(attrs['ngModel'], applyMask);

      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        value = value.replace(/(\d)(\d{3})$/, '$1-$2');
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
/**
 * [TEL BR]
 */
app.directive('telBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      attrs.$set('maxlength', '15');
      scope.$watch(attrs['ngModel'], applyMask);

      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
/**
 * [CNPJCPF BR]
 */
app.directive('cnpjcpfBr', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      attrs.$set('type', 'text');
      attrs.$set('maxlength', '18');
      scope.$watch(attrs['ngModel'], applyMask);

      function applyMask(newValue, oldValue) {
        var value = element.val().replace(/\D/g, '');
        if (value.length > 11) {
          // cnpj
          value = value.replace(/^(\d{2})(\d)/, "$1.$2");
          value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
          value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
          value = value.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
          // cpf
          value = value.replace(/(\d{3})(\d)/, "$1.$2");
          value = value.replace(/(\d{3})(\d)/, "$1.$2");
          value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        element.val(value);
        setTimeout(function() { element[0].setSelectionRange(value.length, value.length); }, 0);
        ngModelController.$setViewValue(value);
      }
    }
  };
});
