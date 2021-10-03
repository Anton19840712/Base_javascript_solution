const obj ={
    name:'Antonio', 
    age: 26, 
    job: 'Fullstack'
}

const entries = [
    ['name', 'Antonio'],
    ['age', 26],
    ['job', 'Fullstack']
]

const map = new Map(entries) // makes a dictionary of objects key-value pair
console.log(obj.job) // using object syntax
console.log(map.get("job")) // using map syntax get by key

//in comparison with object, we have more interesting API to work with objects
map.set("Newkey", "Antonio").set(obj, "Value of object")
console.log(map)

//delete api for map
console.log("delete api for map:")
console.log("-------------------")
console.log(map.get("job"))
console.log(map.size)
map.delete("age") //deleting row by key
console.log(map.has("age"))
console.log(map.size)
console.log(map)
map.clear()

//------------------------------------------------
const entriesNew = [
	["name", "Antonio"],
	["age", 26],
	["job", "Fullstack"],
]

const map2 = new Map(entriesNew)

for (let [key, value] of map2) {
	console.log(key, value)
}

for (let val of map2.values()) {
	console.log(val)
}

map2.forEach((val, key, map2) => {
	console.log(val, key)
})
