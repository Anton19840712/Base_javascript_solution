//1
const sum = (a, b) => a + b
const resultSum = sum(1, 2)
//const sumAgain = (a, b, sum) => sum(a, b) // This is a function => ----take care!
var elelemn = sumAgain(3, 4)
console.log(elelemn)

//2 nice...In map we work with each element of the collection
const names = ["Leonardo", "Lucas", "Bianca", "José", "Maria", "Joe"]
const sayHiToNames = names.map((name) => `Hello, ${name}`)

sayHiToNames.forEach((element) => {
	console.log(element)
})

//3 split and join using space instead of underscore
const splitName = (name) => name.split("_").join(" ")
const returnNameCapitalized = (name) => name.toUpperCase()
console.log(returnNameCapitalized(splitName("leonardo_maldonado")))

//4
// we are also changing the old car object.
const car = {
	model: "Tesla",
	year: 2020,
}

const newCar = car
newCar.model = "Honda" //objects car and newCar are the same now
console.log(car, newCar) //they are the same now
console.log(JSON.stringify(newCar, null, 5))

//5 toObject
//we are DO NOT changing the old car object.
const car = {
	model: "Tesla",
	year: 2020,
}
const newcar = Object.assign({}, car, {
	model: "Honda",
})
console.log(car, newcar)

//06 In map we work with each element of the collection
let list = [1, 2, 3, 4, 5]

const incrementNumbers = (list) => list.map((number) => number + 1) //hello, this is => a function again!!! Look at this man, it returns you something, man,
//that is way you need to call it like this: incrementNumbers(...smth here...)

incrementNumbers(list).forEach((element) => {
	console.log(element)
})

//08

const sum = (a, b) => a + b
const subtraction = (a, b) => a - b

const doubleOperator = (f, a, b) => f(a, b) * 2

console.log(doubleOperator(sum, 3, 1)) // 8
console.log(doubleOperator(subtraction, 3, 1)) // 4

//09 filtering array in a functional style
const even = (n) => n % 2 == 0
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listOfNumbers.filter(even)) // [0, 2, 4, 6, 8, 10]

//10 filtering object by criteria
let people = [
	{ name: "TK", age: 26 },
	{ name: "Kaio", age: 10 },
	{ name: "Kazumi", age: 30 },
]

const olderThan21 = (person) => person.age > 21 //person because we give people as a parameter and can name it how we want it...
const overAge = (people) => people.filter(olderThan21)
console.log(overAge(people)) // [{ name: 'TK', age: 26 }, { name: 'Kazumi', age: 30 }]

//07 function chaining
const string = " I will be a url slug   "

const slugify = (string) => string.toLowerCase().trim().split(" ").join("-")

console.log(slugify(string)) // i-will-be-a-url-slug

//11 mapping: In map we work with each element of the collection
// The map method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.
const people = [
	{ name: "TK", age: 26 },
	{ name: "Kaio", age: 10 },
	{ name: "Kazumi", age: 30 },
]

const makeSentence = (person) => `${person.name} is ${person.age} years old`
const peopleSentences = (people) => people.map(makeSentence)
console.log(peopleSentences(people))

// 12 In map we work with each element of the collection
let values = [1, 2, 3, -4, 5]
const updateListMap = (values) => values.map(Math.abs)
updateListMap(values) // [1, 2, 3, 4, 5]

//12-1
//reduce is when we have an array of numbers and we want to sum them

const euros = [29.76, 41.85, 46.5]
const sum = euros.reduce((total, amount) => total + amount) //takes two numbers: total and the number we processing at the moment

console.log(sum)

// 13 reduce: The idea of reduce is to receive a function and a collection, and return a value created by combining the items.
// too complex to me now...
let shoppingCart = [
	{ productTitle: "Product 1", amount: 10 },
	{ productTitle: "Product 2", amount: 30 },
	{ productTitle: "Product 3", amount: 20 },
	{ productTitle: "Product 4", amount: 60 },
]

const sumAmount = (currentTotalAmount, order) =>
	currentTotalAmount + order.amount

const getTotalAmount = (shoppingCart) => shoppingCart.reduce(sumAmount, 0)

console.log(getTotalAmount(shoppingCart)) // store above mentioned collection here ←

//14 In map we work with each element of the collection

let shoppingCart = [
	{ productTitle: "Product 1", amount: 10 },
	{ productTitle: "Product 2", amount: 30 },
	{ productTitle: "Product 3", amount: 20 },
	{ productTitle: "Product 4", amount: 60 },
]

const getAmount = (order) => order.amount
const sumAmount = (acc, amount) => acc + amount

function getTotalAmount(shoppingCart) {
	return shoppingCart.map(getAmount).reduce(sumAmount, 0)
}

getTotalAmount(shoppingCart) // 120

//15
let shoppingCart = [
	{ productTitle: "Functional Programming", type: "books", amount: 10 },
	{ productTitle: "Kindle", type: "eletronics", amount: 30 },
	{ productTitle: "Shoes", type: "fashion", amount: 20 },
	{ productTitle: "Clean Code", type: "books", amount: 60 },
]

const byBooks = (order) => order.type == "books"
const getAmount = (order) => order.amount
const sumAmount = (acc, amount) => acc + amount

function getTotalAmount(shoppingCart) {
	return shoppingCart.filter(byBooks).map(getAmount).reduce(sumAmount, 0) //firstly filter by books, get ammount, then sum it.
}

console.log(getTotalAmount(shoppingCart)) // 70
