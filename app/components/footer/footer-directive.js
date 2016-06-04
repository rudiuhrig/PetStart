'use strict';

angular.module('petstartApp.footer-directive', [])

.directive("appFooter", function() {
    return {
        templateUrl: "views/partials/footer.html",
        replace: true,
        restrict: "EA",
        transclude: true,
        scope: {
            titulo: "@"
        }
    };
});
