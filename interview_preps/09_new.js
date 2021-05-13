function Cat(color, name) {
	this.color = color
	this.name = name
	return this
}

const cat = new Cat("black", "Katya")
console.log(cat) //Cat { color: 'black', name: 'Katya' }
console.table(cat)
console.log(cat.color)

function myNewCat(constructor, ...args) {
	const obj = {}
	Object.setPrototypeOf(obj, constructor.prototype) // what does that mean?
	return constructor.apply(obj, args) || obj
}

const hiscat = myNewCat(Cat, "black", "Cat")
console.log(hiscat)

//------
console.log("new word using")
const mycat = new Cat("red", "Musya") //more familiar like in C#
console.log(mycat)
