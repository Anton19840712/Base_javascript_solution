document.addEventListener("DOMContentLoaded", () => {
	// 1....... First you are bind to the html elements from your html page
	// we are using querySelector method to bind with elements from UI

	const num1 = document.querySelector("#num1")
	const num2 = document.querySelector("#num2")
	const addBtn = document.querySelector("#add")
	const subBtn = document.querySelector("#sub")
	const output = document.querySelector("#output")

	// 2....... Then you should write methods here to manipulate with gotten elements

	function addHandler() {
		//debugger - this is like a breakpoint on chrome debugger
		const values = getInputValues()
		// console.log(values)
		const result = values[0] + values[1]
		displayResult(result)
	}

	function getInputValues() {
		const value1 = parseInt(num1.value) //we can parse string, we got in a previous code part
		const value2 = +num2.value // or in a more short variant we can write plus
		return [value1, value2] // You may return two values as array
	}

	function displayResult(result) {
		//this function will show the result of calculations
		output.closest(".card").style.display = "block"
		output.innerHTML = `Result = ${result}` // transfer result of calcualtions here using innerHTML
		console.trace()
	}

	function subHandler() {
		const values = getInputValues()
		const result = values[0] - values[1]
		displayResult(result)
	}


	// console.log('Test', addBtn)

	// 3....... Here we add listeners part of coding
	addBtn.addEventListener("click", addHandler) // It listens, if
	subBtn.addEventListener("click", subHandler)
})
