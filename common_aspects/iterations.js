const people = [
    { name: 'Antonio', age: 34, budget:  30000 },
    { name: 'Igor', age: 65, budget:  36000 },
    { name: 'Irina', age: 45, budget:  50000 },
    { name: 'Victoria', age: 43, budget:  50000 },
    { name: 'Ivan', age: 35, budget:  30060 },
    { name: 'Marina', age: 32, budget:  90000 },
]

// 1 classic way:
console.log('1 classic way:')
for (let i = 0; i < people.length; i++) { //use key word let
    console.log(people[i])
}

// 2 classic way:
console.log('2 classic way:')
for (let person of people) {
    console.log(person)
}

// 3 classic way using foreach:
console.log('3 classic way:')
people.forEach(function(person, index, arrPeople){ // by row, by index, whole array
    console.log(person);
    console.log(index);
    console.log(arrPeople);
})

// 4 classic way:
console.log('4 classic way:')
people.forEach((person)=>console.log(person)) //using arrow syntax

// map way
// map means we map person element on people element - smth on smth.
console.log('map way:')
const newPeople = people.map(person =>`${person.name}`) //take a look at "`" not "'" !!!
console.log(newPeople); //we have array in output: []

//filtering: // filter way
console.log('filter way:')
const adults = people.filter(person => person.age > 38 ) //
console.log(adults); //we have array in output: []

// reduce way
console.log('reduce way:')
const amount = people.reduce((total, person)=> total + person.budget, 0)
console.log(amount);

// find way
console.log('find way:')
const myName = people.find(person=> person.name === 'Antonio')
console.log(myName);

// find index way
console.log('findindex way:')
const myNameIndex = people.findIndex(person=> person.name === 'Marina')
console.log(myNameIndex);


//sample usage:
console.log('sample usage:')
const amount3 = people
    .filter(person =>person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) =>total + person.budget, 0)
console.log(amount3)