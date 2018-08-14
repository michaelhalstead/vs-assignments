let letters= [];

let letts = new Map();

let letterFun = function(str){
    for (let i = 0; i < str.length; i++) {
        let letIndex = letters.findIndex(letters => letters.letter === str[i].toLowerCase());
        if (letIndex === -1) {
            letters.push({letter: str[i], freq: str.split(new RegExp(str[i], 'gi')).length-1})
        }
    }
    return letters.sort((a,b) => b.freq - a.freq )
}

let letterFun2 = function(str){
    let dupeFree = '';
    for (let i = 0; i < str.length; i++) {
        if (letts.has(str[i].toLowerCase())) { 
        } else {
            letts.set(str[i].toLowerCase(), str.split(new RegExp(str[i], 'gi')).length-1);
            dupeFree += str[i];
        }
    }
    letts = new Map([...letts.entries()].sort());
    console.log(dupeFree)
    for (var [key, value] of letts) {
        console.log(key, value);
    }
}

console.log(letterFun('this is a string That I am using'))

letterFun2('this is a string That I am using')
