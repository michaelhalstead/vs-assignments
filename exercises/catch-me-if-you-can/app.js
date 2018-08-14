let user = {username: "sam", password: "123abc"};  

let login = function (un, pw){
    if (user.username === un && user.password === pw) {
        return 'login successful'
    } else {
        throw "You have to fill out both fields correctly."
    }
} 

let sum = function(num1, num2) {
    if (!num1 || !num2) {
        throw 'You need to provide two numbers'
    } else if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    } else {
        throw 'You need to provide two numbers'
    }
}


try {
    console.log(sum(5,12))
} catch(err) {
    console.log(err)
}

try {
    console.log(login("sam","123abc"))
} catch(err) {
    console.log(err)
}

try {
    console.log(login("sam","123absc"))
} catch(err) {
    console.log(err)
}