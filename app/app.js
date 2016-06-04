'use strict';

// Declare app level module which depends on views, and components
angular.module('petstartApp', [
  'ngRoute',
  'petstartApp.view1',
  'petstartApp.view2',
  'petstartApp.version',
  'petstartApp.footer-directive',
  'petstartApp.menu-directive',
  'petstartApp.loading-directive'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
