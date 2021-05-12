let language = "JavaScript"
if ((language = "JavaScript")) {
	console.log("The best language is:", language)
}
console.log(Boolean("")) //false
console.log(Boolean("Hello")) //true
console.log(Boolean(" ")) //true
console.log(Boolean("0")) //true
console.log(Boolean(0)) //false !!!
console.log(Boolean(null)) //false !!!
console.log(Boolean([])) //true, видимо, считается, что это пустой объект
console.log(Boolean({})) //true, видимо, считается, что это пустой объект
console.log(Boolean(function () {})) //true, видимо, считается, что это пустой объект
