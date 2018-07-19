var phone = {  
    color: "rose gold",
    price: 800,
    isIphone: true,
    write: function() {
        if (this.isIphone) {
            var iPhone = "an iPhone";
        } else {
            var iPhone = "not an iPhone";
        }
        console.log("The phone is " + iPhone + ". Its color is " + this.color + " and it costs $" + this.price);
    }
}


var person = {  
    name: "Justin",
    gender: "male",
    isCoder: true,
    write: function() {
        if (this.isCoder) {
            var codeMaster = "likes to code.";
        } else {
            var codeMaster = "does not like to code.";
        }
        console.log("The person sitting next to me is named " + this.name + ". From what I gather, he is a " + this.gender + " and " + codeMaster);
    }
}

var drink = {  
    bevType: "water",
    madeOf: "styrofoam",
    ounces: 20,
    isFull: false,
    write: function() {
        if (this.isFull) {
            var cupFull = " and has a full ";
        } else {
            var cupFull = " but doesn't have a full ";
        }
        console.log("In front of me, is a cup made of " + this.madeOf + ". It contains " + this.bevType + cupFull + this.ounces + " ounces in it.");
    }
}

var computer = {  
    compType: {
        make: "Apple",
        model: "Macbook Pro",
        year: 2016
    },
    isSucky: false,
    write: function() {
        if (this.isSucky) {
            var sucks = ". It sucks so hard.";
        } else {
            var sucks = ". It's a pretty dope system.";
        }
        console.log("I'm writing all of this code on a " + this.compType.year + " " + this.compType.make + " " + this.compType.model + sucks);
    }
}

var mouse = {  
    brand: "Logitech",
    price: 10,
    write: function() {
        if (this.price < 15) {
            var isCheap = true;
        } else {
            var isCheap = false;
        }

        if (isCheap) {
            console.log("I have a " + this.brand + " mouse. It cost me $" + this.price + ", so it was pretty cheap.");
        } else {
            console.log("I have a " + this.brand + " mouse. It cost me $" + this.price + ", so it was NOT so cheap.");
        }
    }
}

var monitor = {  
    color: "black",
    size: 24,
    isHD: true,
    write: function() {
        if (this.isHD) {
            var sucks = ". It is an HD monitor.";
        } else {
            var sucks = ". It is not an HD monitor.";
        }
        console.log("There is a monitor in from of me that I can't use right now (Thanks, Apple!). It is " + this.color + " and measures " + this.size + " inches diagonally" + sucks);
    }
}

var chair = {  
    color: "black",
    madeOf: "plastic",
    height: 48,
    isSpinny: true,
    write: function() {
        console.log("Q: The chair I'm sitting in is spinny, true or false? A: " + this.isSpinny)
    }
}

var pants = {  
    color: "blue",
    madeOf: "denim",
    waist: 32,
    isWearing: false,
    write: function() {
        if (this.isWearing) {
            var pantless = ". I'm pantsless under the table, though.";
        } else {
            var pantless = ". I'm super boring so I wore pants to school.";
        }
        console.log("I own a pair of jeans that are " + this.color + pantless)
    }
}

var dongle = {  
    color: "black",
    madeOf: "plastic",
    price: 25,
    isDirtSounding: true,
    write: function() {
        console.log("Q: True or false, the word 'DONGLE' sounds dirty? A: " + this.isDirtSounding)
    }
}

var me = {  
    ethnicity: "white",
    age: 25,
    isBored: true,
    write: function() {
        if (this.isBored) {
            var boredom = ". I'm very bored.";
        } else {
            var boredom = ". I'm not bored at all.";
        }
        console.log("My name is Michael and I am " + this.age + " years old" + boredom)
    }
}

phone.write()
person.write()
drink.write()
computer.write()
mouse.write()
monitor.write()
chair.write()
pants.write()
dongle.write()
me.write()