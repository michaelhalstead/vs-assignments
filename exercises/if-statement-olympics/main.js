var animals = ["cat", "dog"];
var person = {  
    name: "Bobby",
    age: 12
  }
var isBoolean = true;
var bangarang;
var myNum = 10;

if (5 > 3) {
    console.log("is greater than");
}

if (animals[0].length === 3) {
    console.log("is the length");
}

(animals[0] === animals[1]) ? console.log("the same"):console.log("not the same");

(person.age > 18) ? console.log(person.name + " is allowed to go to the movie."):console.log(person.name + " is not allowed to go to the movie.");

(person.name.startsWith("B")) ? console.log(person.name + " is allowed to go to the movie."):console.log(person.name + " is not allowed to go to the movie.");

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    "not equal at all"
}

(1 <= 2 && 2 === 4) ? console.log(true):console.log(false);

(3 * 4 > 10 && 5 + 10 > 10) ? console.log(true):console.log(false);

console.log(typeof animals[1] === "string");
console.log(typeof isBoolean === "boolean");

(bangarang == undefined) ? console.log('this variable has not been defined'):console.log('this variable has been defined');

function compLettNum(a,b) {
    var letter = parseInt(a, 36) - 9;
    (letter > b) ? console.log(a + " is greater than " + b):console.log(a + " is less than " + b);
}

compLettNum("s",12);

(myNum % 2 === 0) ? console.log("even"):console.log("odd");