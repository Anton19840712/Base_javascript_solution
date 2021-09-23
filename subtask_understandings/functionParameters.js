function ReturnBaseData(namev, surname) {
	console.log("here1")
	return namev + surname
}

function PushInitialData() {
	console.log("here2")
	var namev = 24
	var surname = 76
	var sum = ReturnBaseData(namev, surname)
	console.log(sum)
}

PushInitialData()