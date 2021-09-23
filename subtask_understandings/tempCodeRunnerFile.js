function ReturnBaseData(name, surname) {
	return name + surname
}

function PushInitialData() {
	var name = +24
	var surname = +76
	var sum = ReturnBaseData(name, surname)
	console.log(sum)
}
