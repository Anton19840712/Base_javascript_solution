function bmwProducer(kind) {
	return kind === "sport" ? sportCarFactory : familyCarFactory
}

function sportCarFactory(type = null) {
	return new Z4()
}

function familyCarFactory() {
	return new I3()
}

class Z4 {
	info() {
		return "Z4 is a Sport car!"
	}
}

class I3 {
	info() {
		return "I3 is a Family car!"
	}
}

const produce = bmwProducer("sport", "Z4") //first you need to create class based on parameter of the category
const myCar = new produce()
console.log(myCar.info())
