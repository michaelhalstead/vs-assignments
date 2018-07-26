let myArray = [12,17,42,57,18,87,7,9,13,72]

function printEach(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function firstOcc(str, char) {
  pos = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      pos = i
      break;
    } else {
      pos = 'character not found';
    }
  }
  console.log(pos)
}

function meaningOfLife(arr) {
  let found = "42 not found";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 42) {
      found = '42 found'
      break; 
    } else {
      found = '42 not found'
    }
  }
  console.log(found)
}

function sortThisOut(arr) {
  arr.sort(function(a, b){return a-b});
  console.log(arr[0])
}

meaningOfLife(myArray);

firstOcc('bangarang','g');

sortThisOut(myArray);