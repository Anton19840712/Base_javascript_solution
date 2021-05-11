let a = "Variable a"
let b = "Variable b"

{
	//scope
	a = "New Variable A"
	let b = "Local Variable B"
	console.log("Scope A: ", a)
	console.log("Scope B: ", b)
}

console.log("A first block:", a)
console.log("B first block:", b)

const PORT = 8080
const array = ["Javascript", "is", "Awesome"]
array.push("!")
array[0] = "JS"
console.log(array)

const obj = {}
obj.name = "Antonio"
obj.age = 36

console.log(obj)
delete obj.name
console.log(obj)
