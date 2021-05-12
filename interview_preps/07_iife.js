//Immediate Invoked Function Expression
let result = []
for (var i = 0; i < 5; i++) {
	result.push(function () {
		console.log(i)
	})
}

result[2]()
result[4]()

// here for each element you run function
let result = []
for (var i = 0; i < 5; i++) {
	;(function () {
		var j = i
		result.push(function () {
			console.log(j)
		})
	})()
}

result[2]()
result[4]()
