function fizzBuzz() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push('fizbuzz')
        } else if (i % 3 === 0) {
            numbers.push('fizz')
        } else if (i % 5 === 0) {
            numbers.push('buzz')
        } else {
            numbers.push(i)
        }
    }
    return numbers
}

console.log(fizzBuzz())