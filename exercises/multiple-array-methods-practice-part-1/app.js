let people = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]

let olderThan18 = function(arr){
    let eighteenPlus = arr.filter(obj => { return obj.age > 18 });
    return eighteenPlus.sort(function(a, b) {
        let x = a.lastName; let y = b.lastName;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function toDisplayInHTML(arr){
    let HTMLarray = arr.sort((a, b) => { return b.age - a.age });
    HTMLarray.forEach(function(obj, i, HTMLarr){
        HTMLarr[i] = `<li>${obj.firstName} ${obj.lastName} is ${obj.age}</li>`;
    })
    return HTMLarray
}

module.exports = {
  people: people,
  olderThan18: olderThan18,
  toDisplayInHTML: toDisplayInHTML
}