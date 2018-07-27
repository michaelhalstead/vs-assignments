// Finds the largest number in an array without using the Math.max() function
let largest = function(arr) {
   return arr.sort()[arr.length-1]
}

// Write a function that takes an array of words and a character and return each word that has that letter present.
let lettersWithStrings = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-z]/gi) === null) {
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
let isDivisible = function(a,b) {
    return a % b === 0
}

console.log(largest([3, 5, 2, 8, 1])) // => 8  
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"])) // => ["C%4!", "Hey!"]  
console.log(isDivisible(4, 2)) // => true  
console.log(isDivisible(9, 3)) // => true  
console.log(isDivisible(15, 4)) // => false  