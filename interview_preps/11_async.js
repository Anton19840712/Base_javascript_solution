const first = () => console.log("First const")
const second = () => console.log("Second const")
const third = () => console.log("Third const")

first()
//second()
setTimeout(second, 0) //callbackqueue and there event loops
third()
