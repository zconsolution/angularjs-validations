'use strict';

/**
 * @ngdoc overview
 * @name angularjsappApp
 * @description
 * # angularjsappApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsappApp', [
    'ngRoute','ui.mask','720kb.datepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      
  });
