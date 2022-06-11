let age = prompt("Please enter your age")
let userAge = parseInt(age)

if(userAge > 18){
    document.write("You are old enough to drive")
}else{
    let yearsRemaining = 18 - userAge
    document.write(`You have ${yearsRemaining} years remaining to drive`)
}