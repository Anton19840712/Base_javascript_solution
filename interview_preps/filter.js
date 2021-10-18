let myname = "rabiit"
function go() {
	let myname = "Forest"
	console.log(`Run, ${myname}, run`) //Forest
}
myname = "Alice"
go()

//----------
function f1(a, b) {
	console.log(a, b) //foo, bar
}
let f2 = f1.bind(null, "foo") //первый - это контекст, первый null, второй аргумент
// склеиваются те аргументы, которые идут из байнда. это как складывающийся стаканчик.
// сначала зайдет null, foo, bar, baz - поэтому вызывая f2 - она потянет за собой аргументы f1
f2("bar", "baz")

//----------
var a = { name: "Vasya" }
var b = { name: "Vasya" }

console.log(a === b) // так сравнивать нельзя

//----------
console.log(0.1 + 0.2 - 0.2 == 0.1) //false, потому что в js есть заморочка с дробями

//----------
var x = 7
console.log(x++)

//working with dublicates:
const duplicate = (arr) => [...arr, ...arr]
console.log(duplicate([1, 2, 3, 4, 5, 67]))

const arrayToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var elements = filterMyArray(arrayToFilter)
console.log(elements)

function filterMyArray(ar) {
	const filteredArray = []
	arrayToFilter.forEach((element) => {
		if (findNumbersByCondition(element)) {
			filteredArray.push(element)
		}
	})
	return filteredArray
}

function findNumbersByCondition(element) {
	return element % 3 == 0
}
