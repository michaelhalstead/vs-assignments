let reverseStr = str => (str === '') ? '' : reverseStr(str.substr(1)) + str.charAt(0)

let isNum = str => str == Number(str)

let isEven = num => num % 2 === 0

let averageArray = (arr) => arr.reduce((a, b) => a + b) / arr.length

let combineArrays = (arr1, arr2) => [...arr1, ...arr2]

console.log(reverseStr("hello"))
console.log(isNum('3'))
console.log(isEven(4))
console.log(averageArray([12,10,8,10]))
console.log(combineArrays([2,4,6,8],['who','do','we','appreciate']))