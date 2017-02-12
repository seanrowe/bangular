describe("the <p lead> attribute", function() {
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

    it("should throw an error that the lead attribute can only be on <p> tags", function () {
        try {
            $compile("<div bg-lead></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);

        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-lead tag must be used on <p> elements only");
    });

    it("should have the class 'lead'", function () {
        var node;

        try {
            node = $compile("<p bg-lead></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("lead")).toBe(true);
    });
});

describe("the bg-text-left attribute", function() {
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

    it("should have the class 'text-left'", function () {
        var node;

        try {
            node = $compile("<p bg-text-left></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-left")).toBe(true);
    });
});

describe("the bg-text-right attribute", function() {
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

    it("should have the class 'text-right'", function () {
        var node;

        try {
            node = $compile("<p bg-text-right></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-right")).toBe(true);
    });
});

describe("the bg-text-center attribute", function() {
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

    it("should have the class 'text-center'", function () {
        var node;

        try {
            node = $compile("<p bg-text-center></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-center")).toBe(true);
    });
});

describe("the bg-text-justify attribute", function() {
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

    it("should have the class 'text-justify'", function () {
        var node;

        try {
            node = $compile("<p bg-text-justify></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-justify")).toBe(true);
    });
});

describe("the bg-text-nowrap attribute", function() {
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

    it("should have the class 'text-nowrap'", function () {
        var node;

        try {
            node = $compile("<p bg-text-nowrap></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-nowrap")).toBe(true);
    });
});

describe("the bg-text-lowercase attribute", function() {
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

    it("should have the class 'text-lowercase'", function () {
        var node;

        try {
            node = $compile("<p bg-text-lowercase></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-lowercase")).toBe(true);
    });
});

describe("the bg-text-uppercase attribute", function() {
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

    it("should have the class 'text-uppercase'", function () {
        var node;

        try {
            node = $compile("<p bg-text-uppercase></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-uppercase")).toBe(true);
    });
});

describe("the bg-text-capitalize attribute", function() {
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

    it("should have the class 'text-capitalize'", function () {
        var node;

        try {
            node = $compile("<p bg-text-capitalize></p>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("text-capitalize")).toBe(true);
    });
});

describe("the <abbr bg-initialism> attribute", function() {
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

    it("should throw an error that the bg-initialism attribute can only be on <abbr> tags", function () {
        try {
            $compile("<div bg-initialism></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);

        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-initialism tag must be used on <abbr> elements only");
    });

    it("should have the class 'initialism'", function () {
        var node;

        try {
            node = $compile("<abbr bg-initialism></abbr>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("initialism")).toBe(true);
    });
});

describe("the <blockquote bg-reverse> attribute", function() {
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

    it("should throw an error that the bg-reverse attribute can only be on <blockquote> tags", function () {
        try {
            $compile("<div bg-reverse></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-reverse tag must be used on <blockquote> elements only");
    });

    it("should have the class 'blockquote-reverse'", function () {
        var node;

        try {
            node = $compile("<blockquote bg-reverse></blockquote>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("blockquote-reverse")).toBe(true);
    });
});

describe("the <ul bg-unstyled> attribute", function() {
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

    it("should throw an error that the bg-unstyled attribute can only be on <ul> tags", function () {
        try {
            $compile("<div bg-unstyled></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-unstyled tag must be used on <ul> elements only");
    });

    it("should have the class 'unstyled'", function () {
        var node;

        try {
            node = $compile("<ul bg-unstyled></ul>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("list-unstyled")).toBe(true);
    });
});

describe("the <ul bg-inline> attribute", function() {
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

    it("should throw an error that the bg-inline attribute can only be on <ul> tags", function () {
        try {
            $compile("<div bg-inline></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-inline tag must be used on <ul> elements only");
    });

    it("should have the class 'inline'", function () {
        var node;

        try {
            node = $compile("<ul bg-inline></ul>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("list-inline")).toBe(true);
    });
});

describe("the <dl bg-horizontal> attribute", function() {
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

    it("should throw an error that the bg-horizontal attribute can only be on <dl> tags", function () {
        try {
            $compile("<div bg-horizontal></div>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-horizontal tag must be used on <dl> elements only");
    });

    it("should have the class 'dl-horizontal'", function () {
        var node;

        try {
            node = $compile("<dl bg-horizontal></dl>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(node.hasClass("dl-horizontal")).toBe(true);
    });
});