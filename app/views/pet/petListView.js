'use strict';

angular.module('petstartApp.petListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    //Define route to this view
    $routeProvider.when('/petListView', {
        templateUrl: 'views/pet/petListView.html',
        controller: 'PetListViewCtrl'
    });
}])

.controller('PetListViewCtrl', ['$scope', 'PetStartAPI', function($scope, PetStartAPI) {

    //Initialize variables
    $scope.appTitle  = 'Cadastro de Pets';
    $scope.pets        = new Array();
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
    };

}]);