//change elements in array
var initialElements = ["0", "0", "0", "0", "1"]
console.log(initialElements)

let quantities = ["0", "0", "25", "0", "1"]
console.log(quantities)

var arrayForPush = new Array()

for (var i = 0; i < quantities.length; i++) {
	var defaultElement = initialElements[i]
	quantities[i] = initialElements[i]
}

console.log(initialElements)
console.log(quantities)

//push
for (var i = 0; i < quantities.length; i++) {
	arrayForPush.push(quantities[i]) //in arrayForPush you push (quantities[i])
}

console.log("arrayForPush:")
console.log(arrayForPush)
