var ask = require('readline-sync');  
console.log('Hello! My name is Betty. Help me get to know you!\n');  
var firstName = ask.question('What is your first name? ');
console.log('Nice to meet you, ' + firstName.toUpperCase() + '!');
var age = ask.question('I\'m less than a day old but I have a very smart developer that helped me talk.\nHow old are you? ');
console.log('\nSo far, I know your name is ' + firstName + ' and you are ' + age + ' years old.');
var about = ask.question('Tell me a little more about yourself and I\'ll tell you what I remember!\n');
(about.length > 20) ? console.log(about.substr(about.length / 2, about.length / 2)) : console.log(about);
var number = ask.question('Give me a number between [0-' + about.length + ']: ');

while (number > about.length) {
    number = ask.question('Your number should be between [0-' + about.length + ']: ');
}
    console.log(about.substr(number,about.length-number));
    console.log('Awesome, possum! See you later...');