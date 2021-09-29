//1
//alert("Hello");// ok

//2
//confirm("Are you at home now?"); //ok-cancel

//3
var data = confirm("Are you at home now?") //confirm returns true of false...
if (data) {
	debugger
	alert("You are cool, man")
	console.log("here1")
} else {
	debugger
	alert("Go home")
	console.log("here2")
}

//4
//prompt("Insert data here, please..."); //element to insert data
// var element = prompt("Insert data here, please...")
// console.log(element) //does not work...
