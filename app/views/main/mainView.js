'use strict';

angular.module('petstartApp.mainView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    //Define route to this view
    $routeProvider.when('/main', {
        templateUrl: 'views/main/mainView.html',
        controller: 'MainViewCtrl'
    });
}])

.controller('MainViewCtrl', ['$scope', function($scope) {

    //Initialize variables
    $scope.appTitle  = 'Início';

}]);