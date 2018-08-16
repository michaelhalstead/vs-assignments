/////////////////////////
//      REQUIRES      //
////////////////////////

// Allows for user interaction with game.
const ask = require('readline-sync');

// Allows for playing sounds from console.
const sound = require('play-sound')(opts = {});

/////////////////////////////////////
//       Game Play Variables      //
////////////////////////////////////

const items = [];
const healthPacks = [];
let health = 100;
const enemies = [
	{
		type: 'Elite',
		health: 20
	},
	{
		type: 'Grunt',
		health: 10
	},
	{
		type: 'Hunter',
		health: 30
	}
];
const currBaddy = {type: 'grunt', health: 10, attack: 6};

// Player coordinates on the game grid. Min = a1, max = j10
let cX = 'f';
let cY = 4;

let enemiesLeft;
const nada = ['Hmm... nothing here.\n', 'Better keep moving.\n', 'All clear.\n', 'Onward, Spartan.\n', 'Not seeing the ship yet.\n', 'Doesn\'t look like there\'s anything here.\n', 'Not seeing anything.\n'];
let fighting = false;
const logo = `
                                                                        ,+@@@@@@#:              
;@@@                            ,@              @@                    ,@@@@@@@@@@@@@@.          
;@@@                           '@@@             @@@                 @@@.         ;@@@@@.        
;@@@          @@'              @@@@+            @@@@              '@;               @@@@@       
;@@@          @@@@            @ @@@@:           @@@@             +@                  ,@@@#      
;@@@          @@@@               @@@@.          @@@@                                  #@@@      
;@@@.'''''''''@@@@                @@@@          @@@@                      :@@@#       '@@@@@@   
;@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@         @@@@                       @@@        +@@@      
;@@@@         @@@@        @@@@     .@@@@        @@@@                                 ,@@@+      
;@@@@         @@@@       +@@@       ,@@@@       @@@@                                @@@@@       
;@@@@         @@@@      ;@@@         :@@@@      @@@@                  '.         ;@@@@@.        
;@@@@         @@@@     ,@@@'          ;@@@@     '@@@@@@@@@@@@@@       '@@@@@@@@@@@@@@.          
;@@@@         @@@@    .@@@:            +@@@@     #@@@@@@@@@@@@@@           @@@@@@;              
,;;;;                                                                                           
                                                                                               `;

const spartanIMG = `                                                                                                   
                                                ,%&@@#                                             
                                          %& @(/      @                                            
                                         &. /,..#      &                                           
                                  .  . (&% *   #   ,         &%@&                              
                                       &//(#% .   @ #@# %      & (..*                            
                                       ., /&.   /&@  @  %     & #&, # %                            
                                        #@%@&&&    #     (   &.  /  *  &                           
                  /                    %@&@ /     @   %@&     .%%  #    &                          
                             ,,,  ./%. @  ,.@@@@@@*  ,.  %      & (     &*                         
                             ( ( ,    .&   ..@@@@@#  %   *      %  .    &                          
   (#%(.       (@&%%%%%(.     &*#&,#@%,&     &*   .*.@ *   ..  % #    / &                          
   &,, .&&((/, & /   .  ,(    ,        @    .@@@@@, /  . .   .# ,   .  .&                          
            *.  /         &%       ./#%@   (#*.    @    #  /*   #    ,  %                          
                ,,%        %* &@.  *&,(( @,   *&&*   .&&       ..       &&                         
                 , .*#&@@&&  .  /(       .@@*..   .,%@@@@&& (&      &                            
                        @@ ( % .        , #         &@ #.&,     #     &                            
                          @/  ( #       @@@@@@@@@&     &@@@&.     (   %                            
                        .     .@@@(      ,*      ./#@@, @@@@@@@@@     ,                            
                                &@#@&    *(.@@&      ,&@@@@@@@@    &                             
                                      .  ,     @*                .*&&                              
                                       @@@&%%&@.. @#         @@@@@@&                               
                                              ,&  &@         *@@@@@*                               
                                       &&.&@@&&   @@. /  ,    @@@@@ &(                             
                             .@    . ./(   *    @@@@@,#(/*,/&@@@@@@&  .%                           
                          ,,.%*          .,#&&&&@@@@@&       @@@@@@*   #.                          
                         &.& @@@@@@@@  .  (      &@@@@      .@@@@@&& .  @                          
                        @..    ,@@@@&@,    /     *@@&@@&    @@@@@&&*.   #(                         
                       &. /  ,  @@@@@& *#     @@@@@@@@@@&&@@@@@@@@@&  ,   &                        
                      #     ,  ..@@@@@.      (@@@@@@@(./%&@&@@@@*(     ,   &                       
                       & *(%  . # #  /       *@@@@&&          &@       ,   ,.                      
                      ,.  #  # .    /* %@.       .@            @&*          &.                     
                      %     . ,      @       (%.              #% %           &                     
                     &     ,   ( / /#.                        &    /         &.     &&&&&&         
                    &     /  (   * &                           %        ,    &    &,      &        
                  @&     (   @    &                             &   ,    /   %&@&@@#       %#      
                 % .,   .   &   .                                &   *    #        ((#   (&      
                &     *,  %%                                      &   (    *  #   #/      . %      
                @         %                                        &   (    ,  &/   (  #    % #    
           &&   ( **   .#&                                           .  #    .  @@  .  # %    .#   
         ,&.#     %     (&                                            %  *    ,@@@#,   &(.#&&&.    
      *#.             /  &                                             &,#&@&@@@@@@&@&&            
     & / #    /         *&                                              &*@@&&@@@&&(               
     &     (*%*    &                                                  (, .*%#((%# %                
       &@#(  / *&&&/                                                   %&&,   ,&                 `;



/////////////////////////////////////
//       Game Play Functions       //
////////////////////////////////////

let playTheme = function() {
	sound.play('theme.mp3', err => {
		if (err) {
			throw err;
		}
	});
}

// Random number generator used across multiple gameplay elements //
const dice = num => Math.floor(Math.random() * num);

// Updates the letter for the player's X-coordinate movement //
const moveX = (lett, dir) => (dir === 'right') ? String.fromCharCode(lett.charCodeAt(0) + 1) : String.fromCharCode(lett.charCodeAt(0) - 1);

// Randomly generates 5 healthpack locations across the play grid //
const healthLocs = function () {
	for (let i = 0; i < 5; i++) {
		const hY = dice(10) + 1;
		const hX = String.fromCharCode(Math.floor(Math.random() * 10 + 97));
		(hX === 'j' && hY === 10) ? healthPacks.push(hX + 9) : healthPacks.push(hX + hY);
	}
};

// Called from the battle() function when fighting is true and health is > 0
const attack = function () {
	const runAttack = ask.keyIn('Choose an action:\n[1] Attack\n[2] Run\n', {limit: '$<1-2>'});

	// Generate the attack points for each round. Attacks are base attack + modifier
	const plAttack = 10 + dice(6);
	const bgAttack = 10 + dice(6);

	switch (runAttack) {
		case '1':
			console.log(`\nYou did ${plAttack} damage.`);
			currBaddy.health -= (10 + dice(10));
			if (currBaddy.health > 0) {
				console.log(`You received ${bgAttack} damange. Your health is at ${health}.`);
				health -= (currBaddy.attack + dice(10));
			}
			break;
		case '2':
			const isFree = dice(2) === 1;
			if (isFree) {
				console.log('\nYou escaped.\n');
			} else {
				console.log(`\nYou did not escape. You were dealt ${bgAttack} damage.\n`);
			}
			break;
	}
};

const battle = function (num) {
	// Randomly selects baddy, based on where the input number falls within the defined ranges.
	if (num < 46) {
		currBaddy.type = enemies[1].type;
		currBaddy.health = enemies[1].health + dice(3);
		currBaddy.attack = 6;
	} else if (num < 86) {
		currBaddy.type = enemies[0].type;
		currBaddy.health = enemies[0].health + dice(4);
		currBaddy.attack = 12;
	} else {
		currBaddy.type = enemies[2].type;
		currBaddy.health = enemies[2].health + dice(6);
		currBaddy.attack = 18;
	}

	// Tells the player which enemie has appears and sets our fighting variable to true, triggering the while loop
	console.log(`BATTLE\nA ${currBaddy.type} has appeared!\n`);
	fighting = true;

	// Function called when an enemy appears. Prompts for user action and is repeated until the player dies, baddy dies, or run is successful.
	while (fighting && health > 0) {
		// IMPORTANT. If the baddy is a grunt, we don't want to give the player a health kit after the battle. Grunts are normally 1-hit kills.
		if (currBaddy.health < 1 && currBaddy.type !== 'Grunt') {
			enemiesLeft -= 1;
			fighting = false;
			console.log(`You defeated the ${currBaddy.type}.`);
			const dropped = ask.keyIn('You\'ve picked up a health kit. What do you want to do with it?\n[1] Use health kit\n[2] Add health kit to inventory\n', {limit: '$<1-2>'});
			if (dropped === '1') {
				health += 10;
				console.log('You use the health kit. Your health is increased by 10 points.\n');
			} else if (dropped === '2') {
				items.push('Health Kit');
				console.log('Health Kit added to inventory.\n');
			}
		} else if (currBaddy.health < 1) {
			enemiesLeft -= 1;
			fighting = false;
			console.log(`You defeated the ${currBaddy.type}.`);
		} else if (health < 1) {
			health = 0;
			console.log('You have died.');
		} else {
			attack();
		}
	}
};

// Called when the player makes a lateral or longitudinal move. References current location to health pack locations, checks for enemies, and allows for finding ship to end game.
const move = function (num) {
	const pos = cX + cY;

	if (num === 1 && enemiesLeft > 0) {
		battle(dice(101));
	} else if (healthPacks.indexOf(pos) !== -1 && health < 90) {
		health = 100;
		healthPacks.splice(healthPacks.indexOf(pos), 1);
		console.log('You found a health pack. Your health has been restored to 100.\n');
	} else if (pos === 'j10' && enemiesLeft === 0) {
		console.log('You\'ve vanquished The Covenant and made your way to the ship. Humanity is safe, thanks to you, Spartan!');
		health = 0;
	} else if (pos === 'j10') {
		console.log('You\'ve found your ship but the area is not safe for take-off. Vanquish all foes to escape HALO.');
	} else {
		console.log(nada[Math.floor(Math.random() * nada.length)]);
	}
};


const playGame = function (action) {
	switch (action) {
		case 'w':
			if (cY !== 10) {
				cY++;
				move(dice(3));
			} else {
				console.log('You cannot move up any further.\n');
			}
			break;
		case 's':
			if (cY !== 1) {
				cY--;
				move(dice(3));
			} else {
				console.log('You cannot move down any further.\n');
			}
			break;
		case 'a':
			if (cX !== 'a') {
				cX = moveX(cX, 'left');
				move(dice(3));
			} else {
				console.log('You cannot move any further left.\n');
			}
			break;
		case 'd':
			if (cX !== 'j') {
				cX = moveX(cX, 'right');
				move(dice(3));
			} else {
				console.log('You cannot move any further right.\n');
			}
			break;
		case 'i':
			console.log(`Health: ${health}\nRemaining Covenant: ${enemiesLeft}`);
			if (items.length > 0) {
        console.log(`Inventory: Health Kit (x${items.length})`)
				const useHealth = ask.keyInYN('Would you like to use a health pack?\n');
				if (useHealth) {
					health += 10;
					items.pop();
					console.log('Your health has been restored 10 points.\n');
				}
			} else {
        console.log('Inventory: empty\n')
      }
			break;
		case 'all your base are belong to us':
			enemiesLeft = 0;
      break;
    case 'just shoot me':
      health = 0;
	}
};


/////////////////////////
//      GAME START     //
////////////////////////

console.log(logo);
console.log(spartanIMG);
playTheme()

const player = ask.question('\n\nEnter your name, Spartan: ');
const difficulty = ask.keyIn('Choose a difficulty:\n[1] Normal\n[2] Hard\n', {limit: '$<1-2>'});
(difficulty === '1') ? enemiesLeft = 25 : enemiesLeft = 40;

healthLocs();

console.clear();
console.log(`\n\nIt’s the middle of the 26th century and mankind is being destroyed by a conglomerate of alien races known as The Covenant.\n\nA human spaceship is under attack with no chance to survive. The only hope for mankind is for ${player} - a Spartan know as Master Chief - to make sure the Covenant do not get a hold of the ship's AI and discover the location of Earth.\n\nThe survivors of the ship are stranded on a strange alien planet called Halo, and everything is stacked against them. It becomes a desperate battle as the brave crew, lead by the Master Chief and the AI Cortana, try to survive the Covenant's assault.\n\n\n`);
console.log(`You wake up in a crashed escape pod. Your head is spinning, but the world quickly comes into view. Stepping out of the pod, you are greeted by an alien planet covered with the creatures that attacked you - The Covenant.`);
console.log(`A message comes across your intercom. There is an escape from the planet in the form of a jijacked Covenant ship. To ensure mankind's safety, you must traverse to the other side of the small planet,
eliminating all hostiles along the way.\n\nYou can navigate the map using WADS or enter I to view your inventory.\n\nChoose an action to begin.`);

// Keeps the game going if your health is above 0. Winning the game sets health to 0 and ends the loop.
while (health > 0) {
	const act = ask.keyIn('>', {limit: ['w', 's', 'a', 'd', 'i', 'W', 'S', 'A', 'D', 'I']});
	playGame(act.toLowerCase());
}

console.log('GAME OVER')