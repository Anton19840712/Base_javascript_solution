let a = 42
let b = a
b++
console.log("a", a)
console.log("b", b)

console.log("---------")
// here we copy link, but not an object/cell with data
let a = [1, 2, 3]
let b = a
b.push(4)

console.log("a", a)
console.log("b", b)

console.log("---------")
// here we copy link, but not an object/cell with data
let a = [1, 2, 3]
let b = a.concat() // here we forbid
b.push(4)

console.log("a", a)
console.log("b", b)
