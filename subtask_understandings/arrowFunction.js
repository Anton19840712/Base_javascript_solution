//-2 visually understandable sample
let PI = 3.14
const calculateArea = (radius) => radius * radius * PI
calculateArea(10) // returns 314.0

//-1 Use sample for logging
const charactersCounter = (text) => `Character count: ${text.length}`;

function analyzeFile(filename) {
  let fileContent = open(filename);
  return charactersCounter(fileContent);
}

//0
hello = () => {
	return "Hello World!"
}
console.log(hello())

//1
let myFunc = () => {
	console.log("Hello, " + "World!")
}
myFunc()

//2
const run = (param) => console.log(param + " is running")
run("Anton")

//3
var arguments = [1, 2, 3]
var arr = () => arguments[0] //this is automatically becomes a function
console.log(arr())

//4
var func = (x) => x * x
console.log(func(25))

//5 array summing...
var arr = [5, 6, 13, 0, 1, 18, 23]
var sum = arr.reduce((a, b) => a + b)
console.log(sum)
