const person = {
	name: "Antonio",
	surname: "Stark",
	knows: function (what, name) {
		// method in a class person - thinking so - it is better to understand
		console.log(`You know ${what} because you are ${name} ${this.surname}`)
	},
}

person.knows("all", person.name) // pull the method  knows from person class
person.knows("all", "Andrey") // do the same

const irina = { surname: "Irina" } // hardcoding the variable irina
person.knows("something special", irina.surname)
person.knows.call(irina, "something special", "") // using knows inside call method 
person.knows.call(irina, "something special", "Maria") //You know something special because you are Maria Irina //concatenates here Maria and Irina)) what a language)
person.knows.call("something special", "Maria") //You know Maria because you are undefined undefined
person.knows.call(irina, "something special", "Maria", irina.surname) //You know something special because you are Maria Irina
person.knows.call(irina.name, "something special", "Maria", irina.surname) //You know something special because you are Maria undefined
person.knows.call("Maria", "something special", irina.surname) //You know something special because you are Irina undefined// no Maria

const vasilisa = { surname: "Robocop", name: "Vasilisa" } //compiler reads by index, not by dictionary key

person.knows.call(vasilisa.name, "something special", vasilisa.surname) //
person.knows.call(vasilisa, "something special", "Terminator") //here we need to push only object like vasilisa
// no vasilisa.name or vasilisa.surname.
person.knows.call(vasilisa, "something special", String(vasilisa.surname))

const elena = { name: "Elena", surname: "Robocop" } //we cannot write secondname instead of surname
// because compiler does not find it
person.knows.call(elena, "something special", String(elena.name)) //You know something special because you are Elena Robocop// Compiler does not take into consideration object elena. It just takes "something special" for what and String(elena.name) for name. But when the time comes where it needs this.surname - it goes to the translated in a call object elena and takes by the matching key the value of surname. And writes it out.
// in this function we transfer
// knows: function (what, name) { console.log(`You know ${what} because you are ${name} ${this.surname}`)
person.knows.apply(elena, ["something special", String(elena.name)])
person.knows.call(elena, ...["something special", String(elena.name)]) //... is a spread operator
person.knows.bind(elena, "something special", String(elena.name)) //
person.knows.bind(elena, "something special", String(elena.name))() //creates new function first
const bound = person.knows.bind(elena, "something special", String(elena.name))
bound()
//-------------
function Person(name, age) {
	this.name = name
	this.age = age
	//console.log(this);
	return this
}
const elena = new Person("Elena", 20)
console.log(elena)
//------------- Explicit parameter is set outside, it's value is visible
function logThis() {
	console.log(this)
}
const obj = { num: 42 }
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//------------- Implicit, parameter is set inside
const animal = {
	legs: 4,
	logThis: function () {
		console.log(this)
	},
}

animal.logThis()

//--------------
function Cat(color) {
	this.color = color
	console.log("This", this)
	;(() => console.log("Arrow this", this))() //this = Cat { color: 'red' }
}
new Cat("red")
