//when we need a lot of subclasses
//================================================
//Let we say: base class
//================================================
class Car {
	constructor() {
		this.price = 1000
		this.model = "Car"
	}
	getPrice() {
		return this.price
	}
	getDescription() {
		return this.model
	}
}
//================================================
//Object classes: cars
//================================================
class Tesla extends Car {
	// take a look at extends word and at super word
	constructor() {
		super()
		this.price = 25000 //rewrites properties
		this.model = "Tesla" //rewrites properties
	}
}
class Audi extends Car {
	constructor() {
		super()
		this.price = 20000
		this.model = "Audi"
	}
}
//================================================
//Decorators here:
//================================================
//Decorator classes: autopilot
class Autopilot {
	constructor(car) {
		this.car = car
	}
	getPrice() {
		return this.car.getPrice() + 5000
	}
	getDescription() {
		return `${this.car.getDescription()} with autopilot`
	}
}
//================================================
//Decorator classes: parctronic
class Parctronic {
	constructor(car) {
		this.car = car
	}
	getPrice() {
		return this.car.getPrice() + 3000
	}
	getDescription() {
		return `${this.car.getDescription()} with parktronic`
	}
}
//================================================
//Creation and output stage:
//================================================

//1st
let audi = new Audi()
audi = new Autopilot(audi)
console.log(audi.getPrice(), audi.getDescription())

//2st
let tesla = new Tesla()
tesla = new Autopilot(tesla)
//tesla = new Parktronic(tesla) //cannot create with autopilot and parktronic at the same time
console.log(tesla.getPrice(), tesla.getDescription())
//==================================================
