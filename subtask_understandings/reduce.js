// the main idea with reduce is that this works like an iterator with each element,
// so you can do everything with each element: find total, evens, double them, filtering and so on...
// we can calculate elements whatever we want by condition.

// When chaining with map and filter, you end up doing the same job twice.
// You filter out each value and then you loop through the specified function parameters for each remaining one.
// And with reduce, you can filter and loop through the entire array in one go.

// 1 simple reduce:
const euros = [29.76, 41.85, 46.5]
const sum = euros.reduce((total, amount) => total + amount)
console.log(sum)

// 2 calculate average using reduce: //39.37
const euros = [29.76, 41.85, 46.5]
const average = euros.reduce((total, amount, index, array) => {
	total += amount
	if (index === array.length - 1) {
		return total / array.length
	} else {
		return total
	}
})
console.log(average)

// 3 doubling each element of the collection
const euros = [29.76, 41.85, 46.5]
const doubled = euros.reduce((total, amount) => {
	total.push(amount * 2)
	return total
}, [])
console.log(doubled)

// 4 filtering more than 30 sample
const euro = [29.76, 41.85, 46.5]
const above30 = euro.reduce((total, amount) => {
	if (amount > 30) {
		total.push(amount)
	}
	return total
}, [])
console.log(above30)

// 5 count each repeated element
const fruitBasket = [
	"banana",
	"cherry",
	"orange",
	"apple",
	"cherry",
	"orange",
	"apple",
	"banana",
	"cherry",
	"orange",
	"fig",
]
const count = fruitBasket.reduce((tally, fruit) => {
	tally[fruit] = (tally[fruit] || 0) + 1
	return tally
}, {})
console.log(count)

// 6 pipeline with reduce
//-------------------------
function increment(input) {
	return input + 1
}
function decrement(input) {
	return input - 1
}
function double(input) {
	return input * 2
}
function halve(input) {
	return input / 2
}

let pipeline = [increment, double, decrement]

var pipelineNew = [increment, increment, increment, double, decrement, halve]

const result = pipeline.reduce((total, func) => {
	return func(total)
}, 1)

const resultNew = pipelineNew.reduce((total, func) => {
	return func(total)
}, 20)
console.log(result)
console.log(resultNew)

// 7 take elements from the pointed part of the list;
const data = [
	{ a: "happy", b: "robin", c: ["blue", "green"] },
	{ a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
	{ a: "sad", b: "goldfish", c: ["green", "red"] },
]

const colors = data.reduce((total, amount) => {
	amount.c.forEach((color) => {
		//in c element we take data as color and
		total.push(color) //gaining colors in total
	})
	return total
}, [])

console.log(colors)

// 7 take UNIQUE  elements from the pointed part of the list;
const data = [
	{ a: "happy", b: "robin", c: ["blue", "green"] },
	{ a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
	{ a: "sad", b: "goldfish", c: ["green", "red"] },
]

const uniqueColors = data.reduce((total, amount) => {
	amount.c.forEach((color) => {
		if (total.indexOf(color) === -1) {
			//if current is equal to previous(-1), then take it to collection
			total.push(color)
		}
	})
	return total
}, [])

console.log(uniqueColors)

// 8 Unite arrays from array

const data = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
const flat = data.reduce((total, amount) => {
	return total.concat(amount)
}, [])
console.log(flat) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
