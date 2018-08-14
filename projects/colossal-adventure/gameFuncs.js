const attack = function () {
	const runAttack = ask.keyIn('Choose an action:\n[1] Attack\n[2] Run\n', {limit: '$<1-2>'});
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