let readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
let shift = parseInt(readline.question('How many letters would you like to shift? '));  

let encryptThis = function(str,shift) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let encrypted = "";

  for (i = 0; i < str.length; i++) {
    let azIndex = (alpha.indexOf(str[i]) + shift) % 26;
    (alpha.indexOf(str[i]) === -1) ? encrypted += str[i] : encrypted += alpha[azIndex]
  }
  return encrypted
}

console.log(encryptThis(input, shift))