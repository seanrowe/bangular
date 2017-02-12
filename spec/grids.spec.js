describe("the <bg-row> tag", function() {
    var $compile,
        $rootScope,
        $exceptionHandler;

    beforeEach(angular.mock.module(bang.app));

    beforeEach(angular.mock.module(function ($exceptionHandlerProvider) {
        $exceptionHandlerProvider.mode('log');
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$exceptionHandler_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $exceptionHandler = _$exceptionHandler_;
    }));

    it("should throw an error that bgContainer is not found", function () {
        try {
            $compile("<div><bg-row></bg-row></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgContainer', required by directive 'bgRow', can't be found!");
    });

    it("should execute with no errors after being wrapped in bgContainer and should have the class row", function () {
        var node,
            row;

        try {
            node = $compile("<div><bg-container><bg-row></bg-row></bg-container></div>")($rootScope);
            row = node.find("div.row");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toEqual(1);
    });
});

describe("the <bg-column> tag", function() {
    var $compile,
        $rootScope,
        $exceptionHandler;

    beforeEach(angular.mock.module(bang.app));

    beforeEach(angular.mock.module(function ($exceptionHandlerProvider) {
        $exceptionHandlerProvider.mode('log');
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$exceptionHandler_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $exceptionHandler = _$exceptionHandler_;
    }));

    it("should throw an error that bgContainer is not found", function() {
        try {
            $compile("<div><bg-column></bg-column></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgContainer', required by directive 'bgColumn', can't be found!");
    });

    it("should throw an error that bgRow is not found", function() {
        try {
            $compile("<div><bg-container><bg-column></bg-column></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgRow', required by directive 'bgColumn', can't be found!");
    });

    it("should complain that there are no size attributes", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("You must include at least one size type: xsmall, small, medium, or large");
    });

    it("should complain that only sizes 1 - 12 are allowed for xsmall", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column xsmall='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for xsmall-offset", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column xsmall-offset='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for xsmall-push", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column xsmall-push='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for xsmall-pull", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column xsmall-pull='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for small", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column small='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for small-offset", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column small-offset='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for small-push", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column small-push='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for small-pull", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column small-pull='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for medium", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column medium='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for medium-offset", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column medium-offset='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for medium-push", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column medium-push='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for medium-pull", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column medium-pull='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for large", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column large='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for large-offset", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column large-offset='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for large-push", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column large-push='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should complain that only sizes 1 - 12 are allowed for large-pull", function() {
        try {
            $compile("<div><bg-container><bg-row><bg-column large-pull='0'></bg-column></bg-row></bg-container></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Column sizes must be greater than 0 and less than or equal to 12");
    });

    it("should have the class col-xs-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column xsmall='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-xs-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-xs-offset-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column xsmall-offset='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-xs-offset-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-xs-push-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column xsmall-push='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-xs-push-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-xs-pull-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column xsmall-pull='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-xs-pull-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-sm-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column small='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-sm-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-sm-offset-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column small-offset='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-sm-offset-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-sm-push-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column small-push='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-sm-push-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-sm-pull-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column small-pull='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-sm-pull-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-md-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column medium='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-md-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-md-offset-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column medium-offset='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-md-offset-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-md-push-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column medium-push='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-md-push-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-md-pull-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column medium-pull='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-md-pull-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-lg-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column large='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-lg-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-lg-offset-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column large-offset='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-lg-offset-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-lg-push-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column large-push='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-lg-push-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });

    it("should have the class col-lg-pull-1", function() {
        var node,
            column;

        try {
            node = $compile("<div><bg-container><bg-row><bg-column large-pull='1'></bg-column></bg-row></bg-container></div>")($rootScope);
            column = node.find("div.col-lg-pull-1");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors.length).toEqual(0);
        expect(column.length).toEqual(1);
    });
});