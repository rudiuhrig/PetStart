'use strict';


angular.module('petstartApp.menu-directive', [])

.directive("appMenu", function() {
    return {
        templateUrl: "views/partials/menu.html",
        replace: true,
        restrict: "EA",
        transclude: true,
        scope: {
            titulo: "@"
        }
    };
});
