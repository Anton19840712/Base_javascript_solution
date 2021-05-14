// 1)  initial template sample
const instance1 = {
	name: "singletone",
}
const instance2 = {
	name: "singleton",
}
console.log(instance1 === instance2)
instance1 === instance2 //false

// 2) sample

let instance

class Counter {
	constructor() {
		//function constructor
		if (!instance) instance = this //if instance is not exists - constructor creates it
		return instance // and returns it
	}

	getCount() {
		return instance.count
	}

	increaseCount() {
		return instance.count++
	}
}
