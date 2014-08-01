'use strict';

/**
 * @ngdoc overview
 * @name rockolaApp
 * @description
 * # rockolaApp
 *
 * Main module of the application.
 */
angular
  .module('rockolaApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
