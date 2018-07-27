let isCaps = function(letter) {  
    return letter === letter.toUpperCase();
  }


let antiCaps = function(str) {
    let anti = ""
    for (let i = 0; i < str.length; i++) {
        (isCaps(str[i])) ? anti += str[i].toLowerCase() : anti += str[i].toUpperCase();
    }
    return anti
}


antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa 