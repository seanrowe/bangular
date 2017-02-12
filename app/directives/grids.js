(function(module) {

    (function Row() {

        /**
         * controller
         * @param $scope
         */
        var controller = function($scope) {};

        /**
         * link
         * @param scope
         * @param element
         * @param attrs
         * @param ctrls
         */
        var link = function(scope, element, attrs, ctrls) {};

        /**
         * template
         * @returns {string}
         */
        var template = function() {
            return "<div class='row' ng-transclude></div>";
        };

        /**
         * constructor
         * @returns {{restrict: string, transclude: boolean, require: [string], template: template}}
         */
        var constructor = function() {
            return {
                link: link,
                controller: controller,
                replace: true,
                restrict: "E",
                transclude: true,
                require: ["^^bgContainer"],
                template: template
            };
        };

        module.directive("bgRow", constructor);
    }());

    (function Column() {
        var parse;

        /**
         * link
         * @param scope
         * @param element
         * @param attrs
         */
        var link = function(scope, element, attrs) {
            var foundOne = false;

            [
                "xsmall", "xsmallOffset", "xsmallPush", "xsmallPull",
                "small", "smallOffset", "smallPush", "smallPull",
                "medium", "mediumOffset", "mediumPush", "mediumPull",
                "large", "largeOffset", "largePush", "largePull"

            ].forEach(function(attr) {
                if (!attrs.hasOwnProperty(attr)) {
                    return;
                }

                var clazz = _.kebabCase(attr);
                var size = parse(attrs[attr])(scope);

                if (size <= 0 || size > 12) {
                    throw new Error("Column sizes must be greater than 0 and less than or equal to 12");
                }

                if (_.startsWith(clazz, "xsmall")) {
                    clazz = _.replace(clazz, "xsmall", "xs");
                } else if (_.startsWith(clazz, "small")) {
                    clazz = _.replace(clazz, "small", "sm");
                } else if (_.startsWith(clazz, "medium")) {
                    clazz = _.replace(clazz, "medium", "md");
                } else if (_.startsWith(clazz, "large")) {
                    clazz = _.replace(clazz, "large", "lg");
                }

                element.addClass("col-" + clazz + "-" + size);
                foundOne = true;
            });

            if (!foundOne) {
                throw new Error("You must include at least one size type: xsmall, small, medium, or large");
            }
        };

        /**
         * template
         */
        var template = function() {
            return "<div ng-transclude></div>";
        };

        /**
         * constructor
         * @returns {{restrict: string, transclude: boolean, require: [string,string], template: template}}
         */
        var constructor = function($parse) {
            parse = $parse;

            return {
                restrict: "E",
                replace: true,
                transclude: true,
                require: ["^^bgContainer", "^^bgRow"],
                template: template,
                link: link
            };
        };

        module.directive("bgColumn", ["$parse", constructor]);
    }());
}(angular.module(bang.app)));