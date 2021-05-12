console.log("1 st sample-------------")
function sayHelloToPerson(name) {
	const message = "Hello" + name
	return function () {
		console.log(message)
	}
}

result = sayHelloToPerson("Irina")
result()

console.log("2 nd sample-------------")
//Seems to me that is as a class oblect in C#
//Because we can address the methods of this function)) sounds like heresy)
//
function createFrameworkManager() {
	const fw = ["Angular", "React"]
	return {
		print: function () {
			console.log(fw.join(" "))
		},
		// I don't know why I need this)
		add: function (framework) {
			fw.push(framework)
		},
	}
}
const manager = createFrameworkManager()
manager.print()

manager.add("VueJS")
manager.print()

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]
//let is available only in a declared scope
for (let i = 0; i < fib.length; i++) {
	setTimeout(function () {
		console.log(`fib[${i}] = ${fib[i]}`)
	}, 1500)
}

// const fib1 = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib1.length; i++) {
// 	;(function (j) {
// 		setTimeout(function () {
// 			console.log(`fib1[${i}] = ${fib1[i]}`)
// 		}, 1500)
// 	})(i)
// }
