let people = [  
    {
        name: "Angelina Jolie",
        age: 80,
        member: true
    },
    {
        name: "Eric Jones",
        age: 2,
        member: false
    },
    {
        name: "Paris Hilton",
        age: 5,
        member: true
    },
    {
        name: "Kayne West",
        age: 16,
        member: false
    },
    {
        name: "Bob Ziroll",
        age: 100,
        member: true
    }
];

let fiveAndGreaterOnly = function(arr){
    return arr.filter((num) => (num > 5) ? num : '' )
}

let evensOnly = function(arr){
    return arr.filter((num) => (num % 2 === 0) ? num : '' )
}

let fiveCharactersOrFewerOnly = function(arr){
    return arr.filter((word) => (word.length <= 5) ? word : '' )
}

let peopleWhoBelongToTheIlluminati = function(arr){
    return arr.filter((peep) => (peep.member) ? peep : '' )
}

let ofAge = function(arr){
    return arr.filter((peep) => (peep.age > 17) ? peep : '' )
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]))
console.log(evensOnly([3, 6, 8, 2]))
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))
console.log(peopleWhoBelongToTheIlluminati(people))
console.log(ofAge(people))