'use strict';

/**
 * @ngdoc function
 * @name rockolaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rockolaApp
 */
angular.module('rockolaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
