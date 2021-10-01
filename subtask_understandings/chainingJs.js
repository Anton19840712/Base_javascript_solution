//1 Initial sample:
var selectedDiv = $("#myDiv")
selectedDiv.css("color: red")
selectedDiv.height("100px")
selectedDiv.width("100px")

//but better is:
var selectedDiv = $("#myDiv")

selectedDiv.css("color: red").height("100px").width("100px")
console(mainDiv == returnedDiv)

//2 sample: nice sample... super...!!
// So, you can write several functions inside class and it could looks like
var Obj = {
	result: 0,
	addNumber: function (a, b) {
		this.result = a + b
		return this
	},

	multiplyNumber: function (a) {
		this.result = this.result * a
		return this
	},

	divideNumber: function (a) {
		this.result = this.result / a
		return this
	},
}

Obj.addNumber(10, 20)
console.log(Obj.result)

Obj.addNumber(10, 20).multiplyNumber(10).divideNumber(30)
console.log(Obj.result)
