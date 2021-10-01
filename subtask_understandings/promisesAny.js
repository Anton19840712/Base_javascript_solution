// 1 sample for fetching the data:
Promise.any([
	fetch("https://google.com/").then(() => "google"),
	fetch("https://twitter.com/").then(() => "twitter"),
	fetch("https://nickbulljs.com/").then(() => "nick bull"),
])
	.then((first) => {
		console.log(first)
	})
	.catch((error) => {
		console.log(error)
	})

// 2 sample for errors:
Promise.any([
	Promise.reject(new Error("error 1")),
	Promise.reject(new Error("error 2")),
	Promise.reject(new Error("error 3")),
])
	.then((first) => {
		console.log(first)
	})
	.catch((error) => {
		console.log(e.message)
		console.log(e.name)
		console.log(e.errors)
	})
