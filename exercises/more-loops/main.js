var person = {
    name: "Rick",
    occupation: "mad scientist",
    catchPhrase: "Lubba dubba dub dub",
    age: 70,
    getOlder: function(){
        this.age++
    },
    print: function(){
        console.log(this.name + "'s catchphrase is " + this.catchPhrase + "! His age is " + this.age)
    }
}

console.log(person.age)
person.getOlder()
person.print()

//C onstructor function

function Person(name, age, gender, saying) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.saying = saying;
    this.speak = function(){
        console.log(this.saying)
    }
}

var rick = new Person('Rick', 70, 'male', 'That\'s crazy!');
var audrey = new Person('Audrey', 57, 'female','I don\'t belong to him and he doesn\'t belong to me.');

console.log(rick, audrey)

rick.speak()
audrey.speak()