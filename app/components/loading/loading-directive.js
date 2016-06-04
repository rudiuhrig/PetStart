'use strict';

angular.module('petstartApp.loading-directive', [])

.directive("appLoading", function() {
    return {
        templateUrl: "views/partials/loading.html",
        replace: true,
        restrict: "EA",
        transclude: true,
        scope: {
            titulo: "@"
        }
    };
});