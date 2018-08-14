// Allows for user interaction with game.
const ask = require('readline-sync');

// Allows for playing sounds from console.
const sound = require('play-sound')(opts = {});

const {attack} = require('./gameFuncs.js');

const dice = num => Math.floor(Math.random() * num);
const items = [];
const healthPacks = [];
const moveX = (lett, dir) => (dir === 'right') ? String.fromCharCode(lett.charCodeAt(0) + 1) : String.fromCharCode(lett.charCodeAt(0) - 1);
const healthLocs = function () {
	for (let i = 0; i < 5; i++) {
		const hY = dice(10) + 1;
		const hX = String.fromCharCode(Math.floor(Math.random() * 10 + 97));
		(hX === 'j' && hY === 10) ? healthPacks.push(hX + 9) : healthPacks.push(hX + hY);
	}
};

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
let cX = 'f';
let cY = 4;
let enemiesLeft;
const nada = ['Hmm... nothing here.\n', 'Better keep moving.\n', ' ', 'Onward, Spartan.\n', 'Not seeing the ship yet.\n', 'Doesn\'t look like there\'s anything here.\n', ''];
let fighting = false;

const battle = function (num) {
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
	console.log(`BATTLE\nA ${currBaddy.type} has appeared!\n`);
	fighting = true;

	while (fighting && health > 0) {
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

console.log(logo);
console.log(spartanIMG);
sound.play('theme.mp3', err => {
	if (err) {
throw err;
}
});
const player = ask.question('\n\nEnter your name, Spartan: ');
const difficulty = ask.keyIn('Choose a difficulty:\n[1] Normal\n[2] Hard\n', {limit: '$<1-2>'});
(difficulty === '1') ? enemiesLeft = 25 : enemiesLeft = 40;
healthLocs();
console.clear();
console.log(`\n\nIt’s the middle of the 26th century and mankind is being destroyed by a conglomerate of alien races known as The Covenant.\n\nA human spaceship is under attack with no chance to survive. The only hope for mankind is for ${player} - a Spartan know as Master Chief - to make sure the Covenant do not get a hold of the ship's AI and discover the location of Earth.\n\nThe survivors of the ship are stranded on a strange alien planet called Halo, and everything is stacked against them. It becomes a desperate battle as the brave crew, lead by the Master Chief and the AI Cortana, try to survive the Covenant's assault.\n\n\n`);
console.log(`You wake up in a crashed escape pod. Your head is spinning, but the world quickly comes into view. Stepping out of the pod, you are greeted by an alien planet covered with the creatures that attacked you - The Covenant.`);
console.log(`A message comes across your intercom. There is an escape from the planet in the form of a jijacked Covenant ship. To ensure mankind's safety, you must traverse to the other side of the small planet,
eliminating all hostiles along the way.\n\nYou may use the following commands to play HALO:\n-> up\n-> down\n-> left\n-> right\n-> print\n\nChoose an action to begin.`);

const playGame = function (action) {
	switch (action) {
		case 'up':
			if (cY !== 10) {
				cY++;
				move(dice(3));
			} else {
				console.log('You cannot move up any further.\n');
			}
			break;
		case 'down':
			if (cY !== 1) {
				cY--;
				move(dice(3));
			} else {
				console.log('You cannot move down any further.\n');
			}
			break;
		case 'left':
			if (cX !== 'a') {
				cX = moveX(cX, 'left');
				move(dice(3));
			} else {
				console.log('You cannot move any further left.\n');
			}
			break;
		case 'right':
			if (cX !== 'j') {
				cX = moveX(cX, 'right');
				move(dice(3));
			} else {
				console.log('You cannot move any further right.\n');
			}
			break;
		case 'print':
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

while (health > 0) {
	const act = ask.question('>');
	playGame(act);
}

console.log('GAME OVER')