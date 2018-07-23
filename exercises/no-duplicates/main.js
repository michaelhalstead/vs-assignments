function noDuplicates(str) {
    let noDupes = '';
    let extras = '';

    for (let i = 0; i < str.length; i++) {
        (noDupes.includes(str[i])) ? extras += str[i]:noDupes += str[i];
    }
    return noDupes + '\n' + extras
}

console.log(noDuplicates('Come with me and you\'ll be in a world of pure imagination!'))



function noDuplicatesArr() {
    let test = {
        myArr: ['i','a','i','l','u','x','f','x','t','d','e']
    };

    let noDupes = '';
    let extras = '';

    for (let i = 0; i < test.myArr.length; i++) {
        if (noDupes.includes(test.myArr[i])) {
            extras += test.myArr[i]
        } else {
            noDupes += test.myArr[i]
        }
    }
    return noDupes + '\n' + extras
}

console.log(noDuplicatesArr())