//================================================
console.log("1st: creation of initial function...")
//No additional class, just function Dog: looks like a class with parameters and a kind of constructor inside in C#
function Dog(name, breed, weight, handler) {
	//some function, that is an object by itself, that further creates initial object of Dog/constructor, that contains object prototype invisibly.
	this.name = name
	this.breed = breed
	this.weight = weight
	//this.handler = handler // no need to null this parameter in a class as in C# ib=n class signature, it is set null by default if it was not set
	this.bark = function () {
		if (this.weight > 25) {
			console.log(this.name + " says " + "Woof!")
		} else {
			console.log(this.name + " says " + "Yip!")
		}
	}
}
//================================================
//redefinition of method of Object "toString" for a current prototype of Dog
Dog.prototype.toString = function () {
	return this.name + "'s weight is: " + this.weight
}
//================================================
//We can do it also here as in Dog function before
// Dog.prototype.bark = function () {
// 	return this.name + "says Woof"
// }
//================================================
//creation of different instances of initial object of a Dog
var fluffy = new Dog("Fluffy", "Poodle", 30)
var spot = new Dog("Spot", "Chihuahua", 10)
//printing them out
console.log(fluffy.toString())
console.log(spot.toString())
//================================================
console.log('\n2nd: playing with "hasOwnProperty": ')
Dog.prototype.sitting = false
Dog.prototype.sit = function () {
	if (this.sitting) {
		console.log(this.name + " is already sitting")
	} else {
		this.sitting = true
		console.log(this.name + " is now sitting")
	}
}

console.log(spot.hasOwnProperty("species"))
console.log("first atempt:" + fluffy.hasOwnProperty("species"))
console.log("first atempt:" + spot.hasOwnProperty("sitting"))
spot.sitting = true
console.log("second atempt:" + spot.hasOwnProperty("sitting"))
console.log("second atempt:" + fluffy.hasOwnProperty("species"))

//================================================
console.log(
	"\n3d: creation of additional initial function ShowDog and a chain of prototypes..."
)
//1st
function ShowDog(name, breed, weight, handler) {
	Dog.call(this, name, breed, weight) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	this.handler = handler //there is no handler property in base class Dog, that's way we leave it here
}
//creation of a chain of prototypes and a new initial instance;
//we will inherit the others show dogs objects from it.

//2nd
ShowDog.prototype = new Dog() //instance of showdog and a instance of a dog at the same time. !!!!!!!!!!!!

//3d
ShowDog.prototype.constructor = ShowDog //better to set as new instance, so its constructor too. !!!!!!!!!

ShowDog.prototype.league = "Webvile" //adding new property for ShowDog
ShowDog.prototype.stack = function () {
	//adding new functions for ShowDog
	console.log("Stack")
}
ShowDog.prototype.bait = function () {
	console.log("Bait")
}
ShowDog.prototype.gait = function (kind) {
	console.log(this.name + " is " + kind + "ing")
}
ShowDog.prototype.groom = function () {
	console.log("Groom boom boom")
}

//creation of new instance of ShowDog Scotty
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie")

//creation of different instances
var fido = new Dog("Fido", "Mixed", 38)
var fluffy = new Dog("Fluffy", "Poodle", 30)
var spot = new Dog("Spot", "Chihuahua", 10)
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie")
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton")

//checking, what instanceof is for a fido and the other instances:
if (fido instanceof Dog) {
	console.log("Fido is a Dog...")
}
if (fido instanceof ShowDog) {
	console.log("Fido is a Dog...")
}
if (scotty instanceof Dog) {
	console.log("Scotty is a Dog")
}
if (scotty instanceof ShowDog) {
	console.log("Scotty is a ShowDog")
}

//consoling commands
fido.bark()
fluffy.bark()
spot.bark()
beatrice.bark()
scotty.bark()
scotty.gait("Walk")
beatrice.groom()
