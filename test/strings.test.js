const assert = require("assert");
const add = require("../index");

describe("STRINGS testing step 1", () => {
    
    it("\“\” should return 0", () => {
        assert.equal(add(""), 0);
    });

    it("\“1\” should return 1", () => {
        assert.equal(add("1"), 1);
    });

    it("\“1,2\” should return 3", () => {
        assert.equal(add("1,2"), 3);
    });

});

describe("STRINGS testing step 2", () => {

    it("Unknown amount of numbers should return their sum (comma delimeted)", () => {
        assert.equal(add("1,2,3,4,5"), 15);
    });

});

describe("STRINGS testing step 3", () => {

    it("Negative number should throw an error with that number", () => {
        assert.throws(() => add("-1,2"), /Negatives not allowed: -1/);
    });

    it("Negative numbers should throw an error with that numbers", () => {
        assert.throws(() => add("-1,5,-7"), /Negatives not allowed: -1,-7/);
    });

});

describe("STRINGS testing step 4", () => {

    it("Numbers bigger than 1000 should be ignored", () => {
        assert.equal(add("1000,2"), 2);
    });

});

describe("STRINGS testing step 5", () => {

    it("Different delimiter (any length) should be supported", () => {
        assert.equal(add("//[***]//1***2***3"), 6);
    });

});

describe("STRINGS testing step 6", () => {

    it("Multiple delimiters (one char) should be supported", () => {
        assert.equal(add("//[*][%]//1*2%3"), 6);
    });

});

describe("STRINGS testing step 7 ", () => {

    it("Multiple delimiters (any length) should be supported", () => {
        assert.equal(add("//[**][%%%]//1**2%%%3"), 6);
    });
});