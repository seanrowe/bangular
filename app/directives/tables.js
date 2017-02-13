(function Tables(module) {
    (function Table() {
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         * @param scope
         * @param element
         * @param attrs
         */
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
                element.wrap("<div class='table-responsive'></div>");
            }
        };

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<table class='table' ng-transclude></table>";
        };

        /**
         * constructor
         * @returns {{link: link, controller: controller, template: template, restrict: string, transclude: boolean, replace: boolean, require: [string,string]}}
         */
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
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         */
        var link = function() {};

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<thead ng-transclude></thead>";
        };

        /**
         * constructor
         * @returns {{link: link, controller: controller, template: template, restrict: string, transclude: boolean, require: [string,string]}}
         */
        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                replace: true,
                require: ["bgTableHeader", "^^bgTable"]
            };
        };

        module.directive("bgTableHeader", constructor);
    }());

    (function Body() {
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         */
        var link = function() {};

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<tbody ng-transclude></tbody>";
        };

        /**
         * constructor
         * @returns {{link: link, controller: controller, template: template, restrict: string, transclude: boolean, require: [string,string]}}
         */
        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                replace: true,
                require: ["bgTableBody", "^^bgTable"]
            };
        };

        module.directive("bgTableBody", constructor);
    }());

    (function Footer() {
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         */
        var link = function() {};

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<tfoot ng-transclude></tfoot>";
        };

        /**
         * constructor
         * @returns {{link: link, controller: controller, template: template, restrict: string, transclude: boolean, require: [string,string]}}
         */
        var constructor = function() {
            return {
                link: link,
                replace: true,
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
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         * @param scope
         * @param element
         * @param attrs
         * @param ctrls
         */
        var link = function(scope, element, attrs, ctrls) {
            var header = ctrls[1];
            var body = ctrls[2];
            var footer = ctrls[3];

            if (!header && !body && !footer) {
                throw new Error("bg-table-row tag must be used inside bg-table-header, bg-table-body, or bg-table-row")
            }

            if ("active" in attrs) {
                element.addClass("active");
            }

            else if ("success" in attrs) {
                element.addClass("success");
            }

            else if ("info" in attrs) {
                element.addClass("info");
            }

            else if ("warning" in attrs) {
                element.addClass("warning");
            }

            else if ("danger" in attrs) {
                element.addClass("danger");
            }
        };

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<tr ng-transclude></tr>";
        };

        /**
         * constructor
         * @returns {{link: link, controller: controller, template: template, restrict: string, transclude: boolean, replace: boolean, require: [string,string,string,string]}}
         */
        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                replace: true,
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
        /**
         * controller
         */
        var controller = function() {};

        /**
         * link
         * @param scope
         * @param element
         * @param attrs
         * @param ctrls
         */
        var link = function(scope, element, attrs, ctrls) {

        };

        var template = function() {
            return
        };

        var constructor = function() {
            return {
                link: link,
                controller: controller,
                template: template,
                restrict: "E",
                transclude: true,
                replace: true,
                require: [
                    "bgTableColumn",
                    "^^bgTableRow",
                    "?^^bgTableHeader",
                    "?^^bgTableBody",
                    "?^^bgTableFooter"
                ]
            };
        };

        module.directive("bgTableColumn", constructor);
    }());
}(angular.module(bang.app)));