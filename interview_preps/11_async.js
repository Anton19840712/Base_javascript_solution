// 1 You make several arrow methods
const first = () => console.log("First const")
const second = () => console.log("Second const")
const third = () => console.log("Third const")

// 2 Then you call them and one of them call inside timeout method...
first()
//second()
setTimeout(second, 0) //callbackqueue and there event loops
third()
