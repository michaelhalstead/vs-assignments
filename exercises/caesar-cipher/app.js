let readline = require('readline-sync');

const alpha0 = "abcdefghijklmnopqrstuvwxyz";
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
let shift = parseInt(readline.question('How many letters would you like to shift? '));  

let encryptThis = function(str,shift) {
  let newAlpha = alpha0.substr(shift) + alpha0.slice(0,shift)
  let encryptedMsg = "";
  for (i = 0; i < str.length; i++) {
    (str[i] === ' ') ? encryptedMsg += ' ' : encryptedMsg += newAlpha[alpha0.indexOf(str[i])]
  }
  return encryptedMsg
}

console.log(encryptThis(input, shift))