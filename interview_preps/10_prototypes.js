//__proto__
// Object.getPrototypeOf()


//Речь идет о прототипном наследовании.

//we hava a cat object...
//we create it here...
function Cat(name, color) {
	this.name = name
	this.color = color
}

//далее мы отпрототипировались, создали НОВЫЙ объект на основании уже существующего и добавили в него свойство voice.
Cat.prototype.voice = function () {
	console.log(`Cat ${this.name} says myay`)
}
const cat = new Cat("Cat", "white")
console.log(Cat.protoype)

console.log(cat)
console.log(Cat.voice)
console.log((Cat.voice = "loudly"))
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor) //[Function: Cat] { voice: 'loudly' }

//=================

//Просто создаем объект Person
function Person() {}
//Наследуемся от него и добавляем в новый объект ноги и кожу.
Person.prototype.legs = 2
Person.prototype.skin = "white"

const person = new Person()
person.name = "Antonio"
// person.skin = 'white'

console.log("skin" in person)
console.log(person.legs)
console.log(person.name)
console.log(person.hasOwnProperty("name")) //true
console.log(person.hasOwnProperty("skin")) //false, because there is no elements in person(only person.name = 'Antonio')

//Inheritance using prototypes

const proto = { year: 2019, level: "good" }
const myYear = Object.create(proto) // this object is a prototype, because we used create
console.log(myYear) //{}
console.log(myYear.year)
// console.log(myYear.year = 2019)
console.log(myYear.hasOwnProperty("year"))
console.log(myYear.hasOwnProperty("level"))
console.log(myYear.__proto__ === proto)
proto.year = 2200
console.log(myYear.year)
console.log(proto.year)
