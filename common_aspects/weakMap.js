//As is

let obj = { name: "weakmap" }
const arr = [obj]
obj = null
console.log(arr[0]) //weakmap, GC ignores ==null

//In a weak map
//API: get set delete has
let obj = { name: "weakmap" }
const map = new WeakMap([[obj, "obj data"]])
obj = null
console.log(map.get(obj)) //undefined, because obj = null, GC does not ignore ==null and deletes map. This helps to optimized our code in some ways.

//sample usage:
const cache = new WeakMap()

function cacheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now())
	}
	return cache.get(user)
}

let lena = { name: "Elena" }
let alex = { name: "Alex" }

cacheUser(lena) //1633251131568
cacheUser(alex) //1633251131574

//so, we can null lena like this: lena = null and optimize the work of our application

console.log(cache.has(lena))
console.log(cache.has(alex))
