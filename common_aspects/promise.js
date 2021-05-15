//Promices vs callbacks

//console.log("Request data...")
// // bad practice - nesting
// setTimeout(() => { //first callback
// 	console.log("Preparing data...")
// 	const backendData = {
// 		server: "aws",
// 		port: 2000,
// 		status: "working",
// 	}
// 	setTimeout(() => { //second callback
// 		backendData.modified = true
// 		console.log("Data received", backendData)
// 	}, 2000)
// }, 2000)

//sample without nesting
const p = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log("Preparing data...")
		const backendData = {
			server: "aws",
			port: 2000,
			status: "working",
		}
		resolve(backendData) //say promise we end our execution
	}, 2000)
})

p.then((data) => {
	// p2 = new Promise((resolve, reject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})
})
	.then((clientData) => {
		clientData.fromPromise = true
		return clientData
	})
	.then((data) => {
		console.log("Modified", data)
	})
	.catch((err) => console.error("Error:", err))
	.finally(() => console.log("Finally"))

//-----------------

const sleep = (ms) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), ms)
	})
}

// sleep(2000).then(()=> console.log('After 2 sec'))
// sleep(2000).then(()=> console.log('After 3 sec'))
Promise.all([sleep(2000), sleep(5000)]).then(() => {
	console.log("All promices") //only in 5 first seconds
})

//in 2 sec starts first promise and in 3 sec - the second one
Promise.race([sleep(2000), sleep(5000)]).then(() => {
	console.log("Race promices") //in first two seconds
})
