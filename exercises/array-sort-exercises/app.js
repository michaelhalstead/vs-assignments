let leastToGreatest = function(arr) {
    return arr.sort((a,b) => { return a - b});
}

let greatestToLeast = function(arr) {
    return arr.sort((a,b) => { return b - a});
}

let lengthSort = function(arr) {
    return arr.sort((a,b) => { return a.length - b.length});
}

let alphabetical = function(arr) {
    return arr.sort();
}

let byAge = function(arr) {
    return arr.sort((a,b) => { return a.age - b.age});
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "wolf", "eaten", "family"]  
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "eaten", "family", "wolf"]  
console.log(byAge([  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]))