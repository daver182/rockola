'use strict';

/**
 * @ngdoc function
 * @name rockolaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockolaApp
 */
angular.module('rockolaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
