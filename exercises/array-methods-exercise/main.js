var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("vegetables: ", vegetables);  

fruit.shift()
console.log("fruit: ", fruit);  

fruit.push(fruit.indexOf('orange'))
console.log("fruit: ", fruit);  

console.log(vegetables.length)

vegetables.push(vegetables.length)
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables)
food.splice(4,2)
food.reverse()
console.log(food)