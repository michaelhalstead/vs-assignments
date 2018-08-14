let cars = [
    {
        make:'Ford',
        model: 'Mustang',
        year: 1968
    },
    {
        make:'Ford',
        model: 'E150',
        year: 2008
    },
    {
        make:'Chevy',
        model: 'G20',
        year: 1991
    },
    {
        make:'Chevy',
        model: 'Trailblazer',
        year: 2010
    }
]
let angryCars = [];
let newCars = [];
let carTotals = {
    numberOfFords:0,
    numberOfChevys:0
};

cars.forEach((car) => console.log(car.make))

cars.map((car) => { angryCars.push(car.make.toUpperCase()) })

cars.filter((car) => { (car.year > 2005) ? newCars.push(car.make) : ''; })

cars.find((car) => { (car.model === 'E150') ? console.log('There is one or more E150s') : '' })

cars.every((car) => { (car.model !== 'E150') ? console.log('It is false that ever car is an E150') : '' })

cars.reduce((result, car) => { 
    (car.make === 'Ford') ? carTotals['numberOfFords']++ : carTotals['numberOfChevys']++;
    result = carTotals;
    return result
}, '')

console.log(carTotals)