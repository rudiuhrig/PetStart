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
    $scope.pets = [  {    id: 1,    name: 'Lola',    owner: 'Cíntia'  },  {    id: 2,    name: 'Bily',    owner: 'Melina'  },  {    id: 3,    name: 'Lessi',    owner: 'Rudi'  }];
    $scope.pet = null;

    //Reset the state of form field to future validations
 //   $scope.addPetForm.$setPristine();

    $scope.loadPet = function(id) {

        angular.forEach($scope.pets, function(pet) {
            if (pet.id == id) {
                $scope.pet = pet;
            }
        });

        // PetStartAPI.loadPet(id).success(function(data, status) {
        //     $scope.pet =  data;
        // }).error(function(data, status) {
        //         console.log("Error status: " + status);
        //         console.table(data);
        //         console.table(headers);
        //         console.table(config);
        // });

         //TODO: $scope.searchForm.$setPristine();
    };

    $scope.loadPet($routeParams.id);

}]);