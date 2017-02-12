(function(module) {
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
            bindToController: true,
            controllerAs: "affix",
            scope: {}
        }
    };

    module.directive("bgAffix", constructor);
}(angular.module(bang.app)));