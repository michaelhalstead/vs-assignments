let wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let total = function(arr) {
   return arr.reduce((total, num) => {return total + num});
}

let stringConcat = function(arr) {
    return arr.reduce((str, single) => {return str.toString() + single});
}

let totalVotes = function(arr) {
    return arr.reduce((total, obj) => { return total + Number(obj.voted)}, 0);
}

let shoppingSpree = function(arr) {
  return arr.reduce((total, obj) => { return total + obj.price }, 0);
}

let flatten = function(arr) {
  return arr.reduce((total, num) => { return total.concat(num) })
}

let voterResults = function(arr) {
    results =  {
        youngVotes:0,
        youth:0,
        midVotes:0,
        mids:0,
        oldVotes:0,
        olds:0
    };
    return arr.reduce(function(total, obj){
        if (obj.age > 35) {
            results['olds']++;
            results['oldVotes'] += Number(obj.voted);
        } else if (obj.age > 25) {
            results['mids']++;
            results['midVotes'] += Number(obj.voted);
        } else {
            results['youth']++;
            results['youngVotes'] += Number(obj.voted);
        }
        total = results
        return total
    },'')
}

console.log(totalVotes(voters))
console.log(total([1,2,3])) // 6  
console.log(stringConcat([1,2,3]))
console.log(shoppingSpree(wishlist)) // 227005  
console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];  
console.log(voterResults(voters)) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/