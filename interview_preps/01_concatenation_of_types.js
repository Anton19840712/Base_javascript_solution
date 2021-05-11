console.log(1 + "2") // string 12
console.log("" + 1 + 0) // string 10
console.log("" - 1 + 0) // string -1
console.log("3" * "8") // numeric 24
console.log(4 + 10 + "px") // string 14px here is sum first, then concatenate as a string
console.log("px" + 5 + 10) // the same px510
console.log("42" - 40) // numeric 2
console.log("42px" - 2) //not an object in output, but output is NaN
console.log(null + 2) // numeric 2
console.log(undefined + 42) // NaN
