let countCode = function(str){
    return str.match(/(co.e)/gmi).length
}

console.log(countCode("aaacodebbb")) // returns 1 
console.log(countCode("codexxcode")) // returns 2 
console.log(countCode("cozexxcope")) // returns 2