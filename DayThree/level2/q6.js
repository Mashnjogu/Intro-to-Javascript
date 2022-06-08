//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//import the readline module
const readLine = require("readline")
//create an interface for input and output
const rl = readLine.createInterface(
    {input: process.stdin,
    output: process.stdout} 
)

//create an empty user input
let x = ""

rl.question("Enter the value of x\n", function(string){
    x = string
    console.log(`You chose x as: ${x}`)
    let newX = parseInt(x)
let y = (newX * newX) + (newX * 6) + 9
console.log(`The value of y where x is: ${x} is: ${y}`)
    //close input stream
    rl.close()
})

//y value = 0 when x = -3