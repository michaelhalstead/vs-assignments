let dictionary = {
    hello: 'a greeting!'
};

let addEntry = function(word,def){
  let isDefined;
  Object.keys(dictionary).some(function(key){
    let check = new RegExp('(^' + key + '(?=$|s|ing$|er$|ers$))', 'gi');
    isDefined = check.test(word)
  }); 
  if (!isDefined) {
    dictionary[word] = def;
    return 'Added'
  } else {
      return 'This word is already in the dictionary'
  }
}

let lookUp = function(word){
    let isDefined;
    let res;
    Object.keys(dictionary).some(function(key){
        let check = new RegExp('(^' + key + '(?=$|s|ing$|er$|ers$))', 'gi');
        isDefined = check.test(word);
        (isDefined) ? res = `Word: ${key}\nDefinition: ${dictionary[key]}` : res = `'${word}' is not in this dictionary.`;
    })
    return res
}

console.log(addEntry('hellothere','A greeting'))

console.log(lookUp('hellothere'))

