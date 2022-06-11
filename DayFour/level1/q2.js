let myAge = prompt("Enter my age")
let yourAge = prompt("Enter your age")

let myAge1 = parseInt(myAge)
let yourAge1 = parseInt(yourAge)

if(myAge1 > yourAge1){
    let diff = myAge1 - yourAge1
    document.write(`I am ${diff} years older than you.`)
}else{
    let diff2 = yourAge1 - myAge1
    document.write(`You are ${diff2} years older than me`)
}