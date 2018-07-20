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