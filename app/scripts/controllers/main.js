'use strict';

/**
 * @ngdoc function
 * @name angularjsappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsappApp
 */
angular.module('angularjsappApp')
  .controller('MainCtrl', function ($scope) {
   $scope.message = {'REQUIRED':' is invalid','TEXT':' is required','NUMBER':' incorrect'}

  });
