class TeslaCar {
	constructor(model, price, interior, autopilot) {
		this.model = model
		this.price = price
		this.interior = interior
		this.autopilot = autopilot
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
	}
}

//Produce base auto
//const prototypeCar = new TeslaCar("X6", "300000", "S", "True").produce()
//console.log(prototypeCar)
const prototypeCar = new TeslaCar("X6", "300000", "S", "True")

const car1 = prototypeCar.produce()
const car2 = prototypeCar.produce()
const car3 = prototypeCar.produce()

// Adding elements for particular car
car1.interior = "white"
car1.autopilot = true

console.log(car1)
