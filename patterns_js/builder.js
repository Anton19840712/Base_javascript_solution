class Car {
	constructor() {
		this.autopilot = false
		this.parktronic = false
		this.signaling = false
	}
}
class CarBuilder {
	constructor() {
		this.car = new Car()
	}
	addAutopilot(autopilot) {
		this.car.autopilot = autopilot
		return this
	}
	addParktronic(parktronic) {
		this.car.parktronic = parktronic
		return this
	}
	addSignaling(signaling) {
		this.car.signaling = signaling
		return this
	}
	updateEngine(engine) {
		this.car.engine = engine
		return this
	}
	build() {
		return this.car
	}
}
// using of patter
var myCar = new CarBuilder()
	.addAutopilot(true)
	.addParktronic(true)
	.addSignaling(true)
	.updateEngine("V8")
	.build() //need to return created class
console.log(myCar)
