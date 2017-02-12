(function(module) {

    (function Lead() {
        var link = function(scope, element) {
            if (!element.is("p")) {
                throw new Error("bg-lead tag must be used on <p> elements only");
            }

            element.addClass("lead");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgLead", constructor);
    }());

    (function TextLeft() {
        var link = function(scope, element) {
            element.addClass("text-left");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextLeft", constructor);
    }());

    (function TextRight() {
        var link = function(scope, element) {
            element.addClass("text-right");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextRight", constructor);
    }());

    (function TextCenter() {
        var link = function(scope, element) {
            element.addClass("text-center");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextCenter", constructor);
    }());

    (function TextJustify() {
        var link = function(scope, element) {
            element.addClass("text-justify");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextJustify", constructor);
    }());

    (function TextNowrap() {
        var link = function(scope, element) {
            element.addClass("text-nowrap");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextNowrap", constructor);
    }());

    (function TextLowercase() {
        var link = function(scope, element) {
            element.addClass("text-lowercase");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextLowercase", constructor);
    }());

    (function TextUppercase() {
        var link = function(scope, element) {
            element.addClass("text-uppercase");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextUppercase", constructor);
    }());

    (function TextUppercase() {
        var link = function(scope, element) {
            element.addClass("text-capitalize");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgTextCapitalize", constructor);
    }());

    (function Initialism() {
        var link = function(scope, element) {
            if (!element.is("abbr")) {
                throw new Error("bg-initialism tag must be used on <abbr> elements only");
            }

            element.addClass("initialism");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgInitialism", constructor);
    }());

    (function Reverse() {
        var link = function(scope, element) {
            if (!element.is("blockquote")) {
                throw new Error("bg-reverse tag must be used on <blockquote> elements only");
            }

            element.addClass("blockquote-reverse");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgReverse", constructor);
    }());

    (function UnstyledList() {
        var link = function(scope, element) {
            if (!element.is("ul")) {
                throw new Error("bg-unstyled tag must be used on <ul> elements only");
            }

            element.addClass("list-unstyled");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgUnstyled", constructor);
    }());

    (function InlineList() {
        var link = function(scope, element) {
            if (!element.is("ul")) {
                throw new Error("bg-inline tag must be used on <ul> elements only");
            }

            element.addClass("list-inline");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgInline", constructor);
    }());

    (function HorizontalDescription() {
        var link = function(scope, element) {
            if (!element.is("dl")) {
                throw new Error("bg-horizontal tag must be used on <dl> elements only");
            }

            element.addClass("dl-horizontal");
        };

        var constructor = function() {
            return {
                restrict: "A",
                link: link
            }
        };

        module.directive("bgHorizontal", constructor);
    }());
}(angular.module(bang.app)));