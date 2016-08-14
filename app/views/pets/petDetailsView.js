'use strict';

/**
 * API methods for restful web services
 * @project PetStart
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 13/08/2016
 * @copyright Rudi Uhrig Neto 2016
 */
angular.module('petstartApp.petDetailsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    //Define route to this view
    $routeProvider.when('/pets/:id', {
        templateUrl: 'views/pets/petDetailsView.html',
        controller: 'PetDetailsViewCtrl'
    });
}])

.controller('PetDetailsViewCtrl', ['$scope', 'PetStartAPI', '$routeParams', function($scope, PetStartAPI, $routeParams) {

    //Initialize variables
    $scope.appTitle  = 'Detahes do Pet';
    $scope.pet = null;
    $scope.petTypes  = [];

    $scope.loadPetTypes = function() {
        $scope.petTypes = PetStartAPI.loadMockedPetTypes();

        // PetStartAPI.loadPetTypes().success(function(data, status) {
        //     $scope.petTypes =  data;
        // }).error(function(data, status) {
        //     console.log(data);
        // });
    };

    $scope.loadPet = function(id) {
        $scope.pet = PetStartAPI.loadMockedPet(id);

        // PetStartAPI.loadPet(id).success(function(data, status) {
        //     $scope.pet =  data;
        // }).error(function(data, status) {
        //         console.log("Error status: " + status);
        //         console.table(data);
        //         console.table(headers);
        //         console.table(config);
        // });

         //TODO: //Reset the state of form field to future validations
         //$scope.addPetForm.$setPristine();
    };

    $scope.loadPet($routeParams.id);
    $scope.loadPetTypes();

}]);