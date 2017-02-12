describe("the <pre bg-scrollable> attribute", function() {
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

    it("should throw an error that the bg-scrollable attribute can only be on <pre> tags", function () {
        try {
            $compile("<div bg-scrollable></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-scrollable tag must be used on <pre> elements only");
    });

    it("should have the class 'pre-scrollable'", function () {
        var node;

        try {
            node = $compile("<pre bg-scrollable></pre>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("pre-scrollable")).toBe(true);
    });
});