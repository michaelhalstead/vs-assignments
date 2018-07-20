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

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var rick = new Person('Rick', 70, 'male');
var audrey = new Person('Audrey', 57, 'female');

console.log(rick, audrey)