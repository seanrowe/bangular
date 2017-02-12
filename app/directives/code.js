(function Code(module) {

    (function PreScrollable() {
        var link = function(scope, element) {
            if (!element.is("pre")) {
                throw new Error("bg-scrollable tag must be used on <pre> elements only");
            }

            element.addClass("pre-scrollable");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgScrollable", constructor);
    }());
}(angular.module(bang.app)));