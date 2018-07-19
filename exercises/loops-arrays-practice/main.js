var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"] 

var peopleWhoWantToSeeMadMaxFuryRoad = [  
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

var compCount = 0;

for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    compCount++
  }

  if (i === officeItems.length - 1) {
    console.log("There are " + compCount + " computers.")
  }
}

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad.gender === "male") {
    var pronoun = "him"
  } else {
    var pronoun = "her"
  }

  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let " + pronoun + " in.")
  } else {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Feel free to let " + pronoun + " in.")
  }
}

var myNums = [2, 5, 435, 4, 3];
var howManySwitches = 0;
for (var i = 0; i < myNums.length; i++) {
  howManySwitches += myNums[i];
  if (i === myNums.length - 1 && howManySwitches % 2 === 0) {
    console.log("The light was switched " + howManySwitches + " times. It is off.")
  } else if (i === myNums.length - 1) {
    console.log("The light was switched " + howManySwitches + " times. It is on.")
  }
}