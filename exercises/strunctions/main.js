let firstName = "Bruce";
let lastName = "Wayne";
let superheroName = "Batman"
let fullName = firstName.concat(' ' + lastName + ' a.k.a ' + superheroName);

function yourName(){
    let firstFew = fullName.substr(3, 8);
    console.log('Your full name is ' + fullName + '. Your effed up name is \'' + firstFew + '\'.')
}

function youSuck(){
    let newFirst = firstName.replace(firstName,"Tony");
    let newLast = lastName.replace(lastName,"Stark");
    let newSupername = superheroName.replace(superheroName,"Iron Man");
    let spellItOut = newFirst.concat(newLast).split('').join('-');
    console.log('What kind of name is ' + firstName + ' ' + lastName + '? A stupid one. Let\'s respell that \'' + spellItOut + '\'.')
    console.log('You might as well spell ' + superheroName.toLowerCase() + ' with a little \'b\'!')
    console.log('There\'s a reason they write \'' + newSupername.toUpperCase() + '\' in all caps -- it\'s just that awesome.') 
}

function alphaIndex(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let brownFox = "the big brown fox jumped over the lazy dog"
    let input = letter.toLowerCase()
    console.log(letter.toUpperCase() + ' is letter number ' + alphabet.indexOf(input) + ' in the alphabet. The following letters are: ' + alphabet.slice(alphabet.indexOf(input)+1,100))
    console.log('In the phrase, \'' + brownFox + '\', the last position of the letter is character ' + brownFox.lastIndexOf(input) + '. Here are all of the ' + input + '\'s in the phrase: ' + brownFox.match(new RegExp(input, 'gi')) + '.')
}

yourName()
youSuck()
alphaIndex('e')