function ReturnBaseData(namev, surname) {
	console.log("here1")
	var elements = namev + surname
	return elements
}

function PushInitialData() {
	console.log("here2")
	var namev = 24
	var surname = 76
	sum = ReturnBaseData(namev, surname)
	console.log(sum)
}

//PushInitialData()
