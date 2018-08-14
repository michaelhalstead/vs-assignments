let chai = require('chai');
let appJS = require('./app.js')
var addS = appJS.addS
var assert = chai.assert;


// describe, it //
describe("Create a function that adds an S to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['boob']),['boobs'])
    })
    it("should not allow numbers into the array", function(){
        assert.equal(addS(['boob', 8008]),'no numbers')
    })
    it("should not pluralize if the word ends in an s", function(){
        assert.deepEqual(addS(['boobs']),['boobs'])
    })
})