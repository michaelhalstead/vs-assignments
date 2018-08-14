let people = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

let doubleNumbers =function(arr){
    return arr.map((number) => {return number * 2})
}

let stringItUp = function(arr){
    return arr.map(String)
}

let capitalizeNames = function(arr){
    return arr.map((name) => { return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() });
}

let namesOnly = function(arr){
    return arr.map((obj) => { return obj.name });
}

let makeStrings = function(arr){
    return arr.map((obj) => { return (obj.age >= 18) ? `${obj.name} can go to The Matrix` : `${obj.name} is under age!!` });
}

let readyToPutInTheDOM  = function(arr){
    return arr.map((obj) => { return `<h1>${obj.name}</h1><h2>${obj.age}</h2>` });
}

console.log(doubleNumbers([2, 5, 100]));
console.log(stringItUp([2, 5, 100]));
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
console.log(namesOnly(people));
console.log(makeStrings(people));
console.log(readyToPutInTheDOM(people));