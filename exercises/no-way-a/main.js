let removeA = function(str) {
    let noA = ""
    for (let i = 0; i < str.length; i++) {
        (str[i].toLowerCase() === 'a') ? '' : noA += str[i];
    }
    return noA
}

console.log(removeA("I've got a bad feeling about this"))