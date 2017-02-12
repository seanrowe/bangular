(function(module) {
    /**
     * controller
     * @param $scope
     */
    var controller = function($scope) {};

    /**
     * template
     * @param element
     * @param attrs
     * @returns {string}
     */
    var template = function(element, attrs) {
        var containerType = "container";

        if (attrs.hasOwnProperty("fluid")) {
            containerType = "container-fluid";
        }

        return "<div class='" + containerType + "' ng-transclude></div>";
    };

    /**
     * constructor
     * @returns {{restrict: string, template: template, transclude: boolean, replace: boolean}}
     */
    var constructor = function() {
        return {
            controller: controller,
            restrict: "E",
            template: template,
            transclude: true,
            replace: true
        }
    };

    module.directive("bgContainer", constructor);
}(angular.module(bang.app)));