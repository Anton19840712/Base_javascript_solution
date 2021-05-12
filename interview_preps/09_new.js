function Cat(color, name) {
	this.color = color
	this.name = name
	return this
}

const cat = new Cat("black", "Katya")
console.log(cat.color)

function myNewCat(constructor, ...args) {
	const obj = {}
	Object.setPrototypeOf(obj, constructor.prototype) // what does that mean?
	return constructor.apply(obj, args) || obj
}

const cat = myNewCat(Cat, "black", "Cat")
console.log(cat)

//------

const cat = new Cat()
console.log(cat)
