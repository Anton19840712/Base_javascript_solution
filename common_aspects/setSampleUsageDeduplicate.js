const set = new Set([1, 2, 34, 5, 5, 5, 6, 6, 7, 8])
console.log(set)

set.add(10).add(30).add(45).add(66).add(6666).add(6666)
console.log(set)
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(34)) //returns true
console.log(set.size)
console.log(set.values())
console.log(set.entries())

for (let key of set) {
	console.log(key)
}

//get array of unique values:
function uniqValues(array) {
	return [...new Set(array)] // ... - this is spread operator. So that it could be a new array, we need to use this operator.
	//return Array.from(new Set(array))
}
console.log(uniqValues([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 6, 5, 5, 5]))
