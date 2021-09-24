function ReturnBaseData(x, y) {
	return x + y
}

function PushInitialData() {
	var namev = 24
	var surname = 76
	var sum = ReturnBaseData(namev, surname)
	console.log(sum)
}

PushInitialData()
