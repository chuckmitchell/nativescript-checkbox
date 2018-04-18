var Checkbox = require("nativescript-checkbox").Checkbox;
var checkbox = new Checkbox();

describe("greet function", function() {
    it("exists", function() {
        expect(checkbox.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(checkbox.greet()).toEqual("Hello, NS");
    });
});