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
function createFrameworkManager() {
	const fw = ["Angular", "React"]
	return {
		print: function () {
			console.log(fw.join(" "))
		}
		,
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
