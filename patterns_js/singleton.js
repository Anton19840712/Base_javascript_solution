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
		if (typeof Counter.instance === "object") {
			//function constructor
			return Counter.instance //if instance is not exists - constructor creates it // and returns it
		}
		this.count = 0
		Counter.instance = this
		return this
	}

	getCount() {
		return instance.count
	}

	increaseCount() {
		return instance.count++
	}
}

const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(parseInt(myCount2.getCount()))
console.log(+myCount1.getCount())