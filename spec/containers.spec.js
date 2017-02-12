describe("the <bg-container> tag", function() {
    var $compile,
        $rootScope,
        $exceptionHandler;

    beforeEach(angular.mock.module(bang.app));

    beforeEach(angular.mock.module(function($exceptionHandlerProvider) {
        $exceptionHandlerProvider.mode('log');
    }));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$exceptionHandler_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $exceptionHandler = _$exceptionHandler_;
    }));

    it("should have class container-fluid", function() {
        var node,
            container;

        try {
            node = $compile("<div><bg-container fluid></bg-container></div>")($rootScope);
            container = node.find("div.container-fluid");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(container.length).toEqual(1);
    });

    it("should not have class container-fluid", function() {
        var node,
            container;

        try {
            node = $compile("<div><bg-container></bg-container></div>")($rootScope);
            container = node.find("div.container-fluid");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(container.length).toEqual(0);
    });
});