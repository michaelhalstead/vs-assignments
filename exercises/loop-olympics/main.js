var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var nums = [];
var secondFruit = [];
var everyOther = false;
var peopleArray = [  
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
var names1 = [];
var names2 = []
var occupations1 = [];
var occupations2 = [];


for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i])
}

for (var i = 0; i < 10; i++) {
  nums.push(i);
}

for (var i = 0; i < 101; i+=2) {
  console.log(i);
}

for (var i = 0; i < fruit.length; i+=2) {
  secondFruit.push(fruit[i]);
}

for (var i = 0; i < peopleArray.length; i++) {
  names1.push(peopleArray[i].name);
}

for (var i = 0; i < peopleArray.length; i++) {
  occupations1.push(peopleArray[i].occupation);
}

for (var i = 0; i < peopleArray.length; i+=2) {
  names2.push(peopleArray[i].name);
}

for (var i = 1; i < peopleArray.length; i+=2) {
  occupations2.push(peopleArray[i].occupation);
}

var gold1 = [];
var gold2 = [];
var gold3 = [];
var gold4 = [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]];

for (var i = 0; i < 3; i++) {
  gold1.push([0,0,0]);
}

for (var i = 0; i < 3; i++) {
  gold2.push([i,i,i]);
}

for (var i = 0; i < 3; i++) {
  var blah = [];
  for (var j = 0; j < 3; j++) {
    blah.push(j);
  }
  gold3.push(blah);
  console.log(gold3)
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < gold4[i].length; j++) {
    gold4[i][j] = "x";
  }
}