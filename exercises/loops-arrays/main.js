let myNums = [];

function createEvenArray(highestNum) {
  for (var i = 2; i <= highestNum; i+=2) {
    myNums.push(i);
  }
    return myNums;
}

function addOdds(evensOnlyArray) {
  var max = evensOnlyArray[evensOnlyArray.length - 1] + 1;
  for (var i = 1; i <= max; i+=2) {
    myNums.push(i);
  }
    return myNums;
}

function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){return a-b});
}

createEvenArray(10);
addOdds(myNums);
sortNums(myNums);