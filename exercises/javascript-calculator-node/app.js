var ask = require('readline-sync');  
console.log('Simple JavaScript Calculator\n');  
var num1 = ask.question('Enter first number: ');
var num2 = ask.question('Enter second number: ');
var op = ask.question('Select an operation: add, sub, mul, div\n')

switch(op) {
    case 'add':
        console.log('The result is: ' + (Number(num1) + Number(num2)))
        break;
    case 'sub':
        console.log('The result is: ' + (Number(num1) - Number(num2)))
        break;
    case 'mul':
        console.log('The result is: ' + (Number(num1) * Number(num2)))
        break;
    case 'div':
        console.log('The result is: ' + (Number(num1) / Number(num2)))
        break;
}