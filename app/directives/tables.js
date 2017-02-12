(function Tables(module) {
    (function Table() {
        var controller = function() {

        };

        var link = function(scope, element, attrs) {
            if ("striped" in attrs) {
                element.addClass("table-striped");
            }

            if ("bordered" in attrs) {
                element.addClass("table-bordered");
            }

            if ("hover" in attrs) {
                element.addClass("table-hover");
            }

            if ("condensed" in attrs) {
                element.addClass("table-condensed");
            }

            if ("responsive" in attrs) {
                element.wrap("<div class='table-responsive'></div>")
            }
        };

        var template = function() {
            return "<table class='table' ng-transclude></table>";
        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                replace: true,
                require: ["bgTable", "^^bgContainer"]
            };
        };

        module.directive("bgTable", constructor);
    }());

    (function Header() {
        var controller = function() {

        };

        var link = function() {

        };

        var template = function() {

        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                require: ["bgTableHeader", "^^bgTable"]
            };
        };

        module.directive("bgTableHeader", constructor);
    }());

    (function Body() {
        var controller = function() {

        };

        var link = function() {

        };

        var template = function() {

        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                require: ["bgTableBody", "^^bgTable"]
            };
        };

        module.directive("bgTableBody", constructor);
    }());

    (function Footer() {
        var controller = function() {

        };

        var link = function() {

        };

        var template = function() {

        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                require: ["bgTableFooter", "^^bgTable"]
            };
        };

        module.directive("bgTableFooter", constructor);
    }());

    (function Row() {
        var controller = function() {

        };

        var link = function() {

        };

        var template = function() {

        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                require: [
                    "bgTableRow",
                    "?^^bgTableHeader",
                    "?^^bgTableBody",
                    "?^^bgTableFooter"
                ]
            };
        };

        module.directive("bgTableRow", constructor);
    }());

    (function Column() {
        var controller = function() {

        };

        var link = function() {

        };

        var template = function() {

        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                require: [
                    "bgTableColumn",
                    "?^^bgTableHeader",
                    "?^^bgTableBody",
                    "?^^bgTableFooter",
                    "^^bgTableRow"
                ]
            };
        };

        module.directive("bgTableColumn", constructor);
    }());
}(angular.module(bang.app)));