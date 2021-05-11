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

//comparison:
console.log('comparison-----------------');
console.log(2 == '2') //true compiler will compare all as unified type by default: this is string and in 
console.log(2 === '2') // false, because here compiler will take into consideration current type of each object
console.log(undefined == null) // true, because - underfined - smth exists ????????
console.log('0' == false) //true but here)) in this exceptional situation we have true, because compiler will try to compare as numeric types, because here we have boolean value and compiler will cast it to numeric 
console.log('0' == 0) //true
console.log(0 == 0) //true
console.log('-----------------');
console.log(false == '') //false //true
console.log(false == []) //true //true true array is not an object?
console.log(false == {}) //true //false there is smth as object as true that exists = 1
console.log('' == 0) //false //true, because compiler think that '' = 0
console.log('' == []) //false //true
console.log('' == {}) //false //false
console.log(0 == []) //false //true array is not an object?
console.log(0 == {}) //false //false// there is smth as object as true that exists = 1
console.log(0 == null) //true //false
