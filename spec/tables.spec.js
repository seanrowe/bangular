describe("The bg-table directive", function () {
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

    it("should complain that it is not inside a bg-container tag", function () {
        try {
            $compile("<bg-table></bg-table>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgContainer', required by directive 'bgTable', can't be found!");
    });

    it("should be a table with the class 'table'", function () {
        var node,
            table;

        try {
            node = $compile("<bg-container><bg-table></bg-table></bg-container>")($rootScope);
            table = node.find("table");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
    });

    it("should be a table with the class 'table-striped'", function () {
        var node,
            table;

        try {
            node = $compile("<bg-container><bg-table striped></bg-table></bg-container>")($rootScope);
            table = node.find("table");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
        expect(table.hasClass("table-striped")).toBe(true);
    });

    it("should be a table with the class 'table-bordered'", function () {
        var node,
            table;

        try {
            node = $compile("<bg-container><bg-table bordered></bg-table></bg-container>")($rootScope);
            table = node.find("table");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
        expect(table.hasClass("table-bordered")).toBe(true);
    });

    it("should be a table with the class 'table-hover'", function () {
        var node,
            table;

        try {
            node = $compile("<bg-container><bg-table hover></bg-table></bg-container>")($rootScope);
            table = node.find("table");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
        expect(table.hasClass("table-hover")).toBe(true);
    });

    it("should be a table with the class 'table-condensed'", function () {
        var node,
            table;

        try {
            node = $compile("<bg-container><bg-table condensed></bg-table></bg-container>")($rootScope);
            table = node.find("table");
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
        expect(table.hasClass("table-condensed")).toBe(true);
    });

    it("should be a table surrounded by a div that has the class 'table-responsive'", function () {
        var node,
            table,
            div;

        try {
            node = $compile("<bg-container><bg-table responsive></bg-table></bg-container>")($rootScope);
            div = node.find("div");
            table = div.find("table");

        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(table.hasClass("table")).toBe(true);
        expect(div.hasClass("table-responsive")).toBe(true);
    });
});

describe("The bg-table-header directive", function () {
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

    it("should complain that it is not inside a bg-table tag", function () {
        try {
            $compile("<bg-table-header></bg-table-header>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgTable', required by directive 'bgTableHeader', can't be found!");
    });

    it("should render with no errors or warnings", function () {
        var node,
            header;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header></bg-table-header></bg-table></bg-container>")($rootScope);
            header = node.find("thead")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(header.length).toBe(1);
    });
});

describe("The bg-table-body directive", function () {
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

    it("should complain that it is not inside a bg-table tag", function () {
        try {
            $compile("<bg-table-body></bg-table-body>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgTable', required by directive 'bgTableBody', can't be found!");
    });

    it("should render with no errors or warnings", function () {
        var node,
            body;

        try {
            node = $compile("<bg-container><bg-table><bg-table-body></bg-table-body></bg-table></bg-container>")($rootScope);
            body = node.find("tbody")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(body.length).toBe(1);
    });
});

describe("The bg-table-footer directive", function () {
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

    it("should complain that it is not inside a bg-table tag", function () {
        try {
            $compile("<bg-table-footer></bg-table-footer>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgTable', required by directive 'bgTableFooter', can't be found!");
    });

    it("should render with no errors or warnings", function () {
        var node,
            footer;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer></bg-table-footer></bg-table></bg-container>")($rootScope);
            footer = node.find("tfoot")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(footer.length).toBe(1);
    });
});

describe("The bg-table-row directive", function () {
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

    it("should complain that it is not inside a bg-table-header, bg-table-body, or bg-table-footer tag", function () {
        try {
            $compile("<bg-container><bg-table><bg-table-row></bg-table-row></bg-table></bg-container>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("bg-table-row tag must be used inside bg-table-header, bg-table-body, or bg-table-row");
    });

    it("should render with no errors inside a bg-table-header", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors inside a bg-table-body", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-body><bg-table-row></bg-table-row></bg-table-body></bg-table></bg-container>")($rootScope);
            row = node.find("tr")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors inside a bg-table-footer", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("tr")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'active'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row active></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr.active")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'success'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row success></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr.success")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'info'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row info></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr.info")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'warning'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row warning></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr.warning")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'danger'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row danger></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("tr.active")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });
});

describe("The bg-table-column directive", function () {
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

    it("should complain that it is not inside a bg-table-row tag", function () {
        try {
            $compile("<bg-container><bg-table><bg-table-column></bg-table-column></bg-table></bg-container>")($rootScope);
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).not.toEqual([]);
        expect($exceptionHandler.errors.length).toEqual(1);
        expect($exceptionHandler.errors[0].toString())
            .toContain("Controller 'bgTableRow', required by directive 'bgTableColumn', can't be found!");
    });

    it("should render as a th tag when inside of a bg-table-header section", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-header><bg-table-row><bg-table-column></bg-table-column></bg-table-row></bg-table-header></bg-table></bg-container>")($rootScope);
            row = node.find("th")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render as a td tag when inside of a bg-table-body section", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-body><bg-table-row><bg-table-column></bg-table-column></bg-table-row></bg-table-body></bg-table></bg-container>")($rootScope);
            row = node.find("td")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render as a td tag when inside of a bg-table-footer section", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'active'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column active></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td.active")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'success'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column success></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td.success")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'info'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column info></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td.info")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'warning'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column warning></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td.warning")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });

    it("should render with no errors and have the class 'danger'", function () {
        var node,
            row;

        try {
            node = $compile("<bg-container><bg-table><bg-table-footer><bg-table-row><bg-table-column danger></bg-table-column></bg-table-row></bg-table-footer></bg-table></bg-container>")($rootScope);
            row = node.find("td.danger")
        } catch (e) {
            $exceptionHandler(e);
        }

        expect($exceptionHandler.errors).toEqual([]);
        expect(row.length).toBe(1);
    });
});