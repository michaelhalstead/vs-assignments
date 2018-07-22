function findTheBiggest(arr) {
    return Math.max(...arr)
}

console.log(findTheBiggest([20,5,30,50,100,55,23,103])); // 103
console.log(findTheBiggest([21,22,3,10,200])); // 200
console.log(findTheBiggest([10,100,1000,12,22,14])); // 1000