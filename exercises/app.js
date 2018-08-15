let name = 'John'
let age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (var i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

console.log(petObjects)

const vegetables = carrots.map(carrot => { return {type: "carrot", name: carrot} });

const friends = people.filter(person => { !!person.friendly })

const doMathSum = (a, b) => { a + b }

const produceProduct = (a, b) => { a * b }

const makeStr = (firstName, lastName, age) => { `Hi, ${firstName} ${lastName}, how does it feel to be ${age}?` }

const dogs = animals.filter((animal) => {(animal.type === "dog") ? true : false })

const whereYouAt = (location, name) => { `Hi, ${name}!\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.` }