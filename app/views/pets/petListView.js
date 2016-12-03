'use strict';

angular.module('petstartApp.petListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    //Define route to this view
    $routeProvider.when('/pets', {
        templateUrl: 'views/pets/petListView.html',
        controller: 'PetListViewCtrl'
    });
}])

.controller('PetListViewCtrl', ['$scope', 'PetStartAPI', function($scope, PetStartAPI) {

    //Initialize variables
    $scope.appTitle  = 'Cadastro de Pets';
    $scope.pets        = [];
    $scope.loading   = false;
    $scope.petsNotFound = false;
    $scope.errorRest = false;

    /**
     * Perform the searching pet by pet name
     * and stores data to be used across app
     * @param {string} petName
     * @return: void
     */
    $scope.searchPet = function(petName) {
        $scope.loading        = true;
        $scope.petsNotFound = false;
        $scope.errorRest = false;
        var stringSearch      = "%" + petName + "%";

        //Call API search pets method
        PetStartAPI.searchPets(stringSearch).success(function(data, status) {
            $scope.pets = data;

            if (data.length <= 0) {
                $scope.petsNotFound = true;
            }

        }).error(function(data, status) {
            console.log("Error status: " + status);
            $scope.errorRest = true;
        }).finally(function() {
            $scope.loading = false;
        });

        //Reset the state of form field to future validations
        $scope.searchForm.$setPristine();
        console.table($scope);
    };

    $scope.orderBy = function(field) {
        $scope.field = field;
        $scope.direction = !$scope.direction;
    };

     /**
     * Set filters for next page
     * @param {string} clickedRoute
     * @return: void
     */
    $scope.setFilters = function(clickedPet) {
        // var searchFilters = {
        //     'searchedPetName': $scope.petName,
        //     'clickedPet': clickedPet.name + " - " + clickedPet.owner
        // };
        // PersistenceService.persistFilters(searchFilters);
    };

    $scope.removePet = function(pet) {
        PetStartAPI.removePet(pet);
        $scope.loadPets();
    };

    $scope.loadPets = function() {

        $scope.pets = PetStartAPI.loadMockedPets();

            // PetStartAPI.loadPets().success(function(response) {
            //     $scope.pets = response.data;

            // }).error(function(data, status, headers, config) {
            //     console.log("Error status: " + status);
            //     console.table(data);
            //     console.table(headers);
            //     console.table(config);
            // });
    };

    $scope.loadPets();

}]);