// Comments:
// Function, that takes some milliseconds
// Returns new promise
// In consttructor of which we give function resolve(let it be named 'r' )
// In callback we will call resolve r if timeout ends.

const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms))
}

//delay(2000).then(() => console.log("2 sec"))

const url = "https://jsonplaceholder.typicode.com/todos/1"

// function fetchTodos() {
// 	console.log("Fetch todo started...")
// 	return delay(2000)
// 		.then(() => {
// 			//when such delay will ends, we =>
// 			//uderstanding, that the given method returns promise we can use here '.then' method.
// 			//fetch(url).then(response=>response.json())
// 			//But this is a chain of promises, that it is possible to write like:
// 			return fetch(url) //and write return above also. ↑
// 		})
// 		.then((response) => response.json())
// }

// fetchTodos()
// 	.then((data) => {
// 		console.log("Data", data)
// 	})
// 	.catch((e) => console.error(e))

async function fetchTodos() {
	//async always returns promise.
	console.log("Fetch todo started...")
	try {
		await delay(2000) //This is tantamount to the fact that we are processing promise.
		const response = await fetch(url)
		const data = await response.json()
		console.log("Data:", data)
	} catch (error) {
		console.error(e)
	} finally {
	}
}

fetchTodos()
