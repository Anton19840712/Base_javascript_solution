//#1
//--------------------------as is solution
//TRY TO USE COMPLEX OBJECTS
function about(name, age) {
	console.log("your name: " + name)
	console.log("your age: " + age)
}
about("Alex", 22)

//--------------------------better solution
function about2(args) {
	// you transfer object here
	//instead of particular variables
	//and parse object to name and age below
	console.log("your name: " + args.name)
	console.log("your age: " + args.age)
}
about2({
	name: "Alex",
	age: "32",
})

//#2
//--------------------------YIELD
function* idGenerator() {
	let id = 177
	while (true) {
		yield id++
	}
}

const myIdGenerator = idGenerator()
console.log(myIdGenerator.next().value)
console.log(myIdGenerator.next().value)
console.log(myIdGenerator.next().value)
console.log(myIdGenerator.next().value)

//#3
//--------------------------WORKING WITH JSON TYPE
const arg = {
	name: "Alex",
	age: 22,
	data: ["hi", "hello"],
}

console.log(JSON.stringify(arg)) //{"name":"Alex","age":22,"data":["hi","hello"]}
console.log(JSON.stringify(arg, null, 15)) //more representatively

// #4
//similar to C# elvis operator
const subway = {
	red: ["station 1", "station 2", "station 3"],
	green: ["station 4", "station 5", "station 6"],
}
console.log(subway.green.join(""))
// console.log(subway.blue.join(""))// here is
//mistake, because there is no blue object
console.log(subway.blue?.join("")) //undefined

//#5
//--------------------------WORKING WITH JSON STRING
const arg = {
	///create object
	name: "Alex",
	age: 22,
	data: ["mm33445565", "2343456789", "98s8sjs8"],
}

const { name, age } = arg //create object { name, age }
console.log(name, age) //Alex 22
const { 0: pass, 1: uac } = arg.data //create object { 0: pass, 1: uac }
console.log(pass, uac)

//#6
let arr = [44, 55]
console.log([...arr, 33, 99]) //[ 44, 55, 33, 99 ] //adding after
console.log([33, 99, ...arr]) //[ 33, 99, 44, 55 ] //adding before

//#7
const myArr = [3, 4, 3, 5, 3, 4, 5, 6, 7, 12, 3, 4, 1, 12, 1]
console.log(new Set(myArr))
console.log(...new Set(myArr)) // no dupes : 3 4 5 6 7 12 1

//#8
const ar8 = [["2"], "2", 34, 88, "99"]
const ar8Num = ar8.map(Number)
console.log(ar8Num) //[ 2, 2, 34, 88, 99 ] - just number

//#9
//check how many seconds takes execution of a method
//---------first
// I need a value in b, and b value in a.
console.time("ex 1")
let a = 77
let b = 99
for (let i = 0; i < 1000000; i++) {
	;[a, b] = [b, a]
}
console.timeEnd("ex 1")

//---------second is faster!
console.time("ex 2")
let x = 77
let y = 99
for (let i = 0; i < 1000000; i++) {
	let t = x
	x = y
	y = x
}
console.timeEnd("ex 2")
