'use strict';

// Declare app level module which depends on views, and components
angular.module('petstartApp', [
  'ngRoute',
  'petstartApp.view1',
  'petstartApp.view2',
  'petstartApp.mainView',
  'petstartApp.petListView',
  'petstartApp.petDetailsView',
  'petstartApp.version',
  'petstartApp.footer-directive',
  'petstartApp.menu-directive',
  'petstartApp.loading-directive',
  'petstartApp.api',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    /**
    * Routing for base path
    * @example: http://petstart/#!/
    */
    $routeProvider.when('/', {
        templateUrl: 'views/main/mainView.html',
        controller: 'MainViewCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/main'});
}]);
