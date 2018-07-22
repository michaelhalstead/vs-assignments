var favoritePlumber = {  
    firstName: "Mario",
    lastName: "Mario",
    age: 37,
    hobbies: [
        {
            hobby: "saving princesses",
            difficulty: 10
        },
        {
            hobby: "dealing with other people's crap (literally...)",
            difficulty: 4
        },
        {
            hobby: "popping pills under the guise of being a doctor",
            difficulty: 1
        },  
    ],
    enemies: ['Bowser','Goombas', 'Koopa Troopas', 'Koopa Paratroopas', 'Hammer Bros', 'Lakitus', 'Bloopers', 'Spinys', 'Buzzy Beetles', 'Puranha Plants'],
    bestFriends: [
        {
            firstName: "Luigi",
            lastName: "Mario",
            occupation: "plumber",
            age: 35,
            hobbies: [
                {
                    hobby: "saving princesses",
                    difficulty: 10
                },
                {
                    hobby: "dealing with other people's crap (literally...)",
                    difficulty: 4
                },
                {
                    hobby: "informing people his name is not 'Green Mario'",
                    difficulty: 4
                }     
            ]
        },
        {
            firstName: "Peach",
            lastName: "Toadstool",
            occupation: "princess",
            age: 32,
            hobbies: [
                {
                    hobby: "being kidnapped by bowser",
                    difficulty: 1
                }   
            ]
        }
    ],
    bio: function() {
        var friends = "";
        for (var i = 0; i < this.bestFriends.length; i++) {
            if (i !== this.bestFriends.length - 1) {
                friends = friends + this.bestFriends[i].firstName + ', ';
            } else {
                friends = friends + 'and ' + this.bestFriends[i].firstName;
            }
        }

        return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + '. I\'m ' + this.age + ' years old and my occupation is plumber. My friends are ' + friends + ' and I love them dearly!'
    }
}

console.log(favoritePlumber.bio())