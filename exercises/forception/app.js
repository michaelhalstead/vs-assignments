let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
let alphabet = "abcdefghijklmnopqrstuvwxyz"; 
let newArray = [];

for (let i = 0; i < people.length; i++) {
    newArray.push(people[i])
    for (let j = 0; j < alphabet.length; j++) {
        newArray.push(alphabet[j])
    }
}

console.log(newArray)