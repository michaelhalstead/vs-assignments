let chai = require('chai');
let appJS = require('./app.js')
let olderThan18 = appJS.olderThan18
let inHTML = appJS.toDisplayInHTML
let people = appJS.people
var assert = chai.assert

let expected = [  
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }
  ]

  console.log(people)

// // describe, it //
describe("Should return an array of people older than 18", function(){
    it("returns an array of only people older than 18", function(){
        assert.deepEqual(olderThan18(people), expected)
    })
})