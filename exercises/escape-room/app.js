var readline = require("readline-sync");  

let alive = true;
let game = {
    positions: ['0,2','1,2','2,2',
                '0,1','1,1','2,1',
                '0,0','1,0','2,0',],
    movements: ['You are in the top-left corner of the room.\n', 'You are in the center of the front wall.\n', 'You are in the top-right corner of the room. You notice a shiny object on the floor.\n',
                'You are standing in the center of the left wall.\n', 'You are in the middle of the room.\n','You are standing at the center of the right wall. There is a door in front of you.\n',
                'You are in the bottom-left corner of the room. You see a hole in the wall just big enough to fit your hand.\n','You are standing in the center of the back wall.\n','You are in the bottom-right corner of the room.\n']
}

let x = 1;
let y = 1;
let key = false;
let won = false;

let name = readline.question("What is your name? ");
let where = (a,b) => a + ',' + b;

/* character can exist within any spot of a 9 square grid:
    (0,2) (1,2) (2,2)
    (0,1) (1,1) (2,1)
    (0,0) (1,0) (2,0)

    starting position is (1,1). door is (2,1). hole is (0,0). key is (2,2).
*/

console.log('\n\nWelcome, ' + name + '.\n\nYou are in a locked room by yourself. To your right is a door. In order to escape, you must find the key.')
console.log('\n\nChoose from the following commands:\n1. up\n2. down\n3. left\n4. right\n5. open door\n6. inspect\n\n')

let playGame = function(what,hole) {
    switch(what) {
        case 'up':
            if (y < 2) {
                y++
                console.log(game.movements[game.positions.indexOf(where(x,y))])
            } else {
                console.log('You are as far forward as you can go.\n')
            }
            break;
        case 'down':
            if (y > 0) {
                y--
                console.log(game.movements[game.positions.indexOf(where(x,y))])
            } else {
                console.log('You are as far back as you can go.\n')
            }
            break;
        case 'left':
            if (x > 0) {
                x--
                console.log(game.movements[game.positions.indexOf(where(x,y))])
            } else {
                console.log('You are as far left as you can go.\n')
            }
            break;
        case 'right':
            if (x < 2) {
                x++
                console.log(game.movements[game.positions.indexOf(where(x,y))])
            } else {
                console.log('You are as far right as you can go.\n')
            }
            break;
        case 'inspect':
            if (where(x,y) === '2,2') {
                console.log('You\'ve found a key! Where to now?\n')
                key = true
            } else if (where(x,y) === '0,0') {
                console.log('You see a hole in the wall just big enough for you hand to fit inside.\n')
            } else if (where(x,y) === '2,1') {
                console.log('There is a door in front of you. It appears to be locked.\n')
            } else {
                console.log('Nothing to see here...\n')
            }
            break;
        case 'open door':
            if (where(x,y) === '2,1' && key) {
                alive=false;
                won=true;
            } else {
                console.log('The door is locked. You try to open it, to no avail.\n')
            }
            break;
        default:
            if (hole.length == 3 && where(x,y) === '0,0') {
                alive = false;
                console.log('You put your hand in the hole. A sudden, sharp pain overtakes your body. You die.\n')                
            } else {
                console.log('You can\'t do that here.\n');
            }
            break;
    }
}

while (alive) {
    let prompt = readline.question('')
    let isHole = prompt.match(/(?:put|hand|hole)/gi);
    let hole = (isHole === null) ? 0 : isHole;

    playGame(prompt,hole)
}

if (won) {
    console.log('Congratulations, ' + name + '! You escaped the room!')
} else {
    console.log('Game Over')
}