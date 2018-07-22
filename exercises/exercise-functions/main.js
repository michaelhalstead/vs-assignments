function addThese(a, b) {
    return a + b;
}

function findMax(a, b, c) {
    return Math.max(a,b,c);
}

function oddEven(number) {
    if (number % 2 === 0) {
        return "this number is even"
    } else {
        return "this number is odd"
    }
}

function strLength(str) {
    if (str.length <= 20) {
        return str + str
    } else {
        return str.slice(0,Math.round(str.length/2))
    }
}

function myFibonacci(n) {
    let seq = [];
    let n1 = 0;
    let n2 = 1;
    let temp;

    for (i = 0; i <= n; i++){
        let n3 = n1 + n2;

        (i === 0) ? seq.push(n1,n2):'';

        seq.push(n3)
        temp = n3;
        n1 = n2;
        n2 = temp;
    }

    return(seq + '\nThe sum is: ' + seq.reduce((a,b) => a + b, 0))
}

function myQuadratic(a,b,c) {
    let x1 = (b * -1 + Math.sqrt(b*b - 4*a*c)) / 2 * a;
    let x2 = (b * -1 - Math.sqrt(b*b - 4*a*c)) / 2 * a;

    if (isNaN(x1)) {
        return "These numbers do no constitute a valid quadratic equation."
    } else {
        let exes = [x1,x2];
        return exes
    }
}

function mostCommon(str) {
    const chars = str.split('');
    let freq = 1;
    let curr = 0;
    let char;

    for (let i=0; i < chars.length; i++) {
        for (let j=i; j < chars.length; j++) {
            if (chars[i] !== " ") {
                if (chars[i] == chars[j]) {
                    curr++;
                } else if (freq < curr){
                    freq = curr; 
                    char = chars[i];
                }
            }
        }
        curr=0;
    }
    console.log('The most frequent character is \'' + char + '\' which occurs ' + freq + ' times.') ;
}