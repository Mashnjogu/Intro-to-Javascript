let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(quote)

let number = 9.8;
let num = 10
console.log(number == num)

let language = 'Python'
let language1 = 'Jargon'
if (language.includes('on') && language1.includes('on')){
console.log("The result is true")
}else{
    console.log('The result is false')
}

let confirmtext = 'I hope this course is not full of jargon'
console.log(confirmtext.includes('jargon'))

let randomNo = Math.random()
console.log(randomNo * 100)

//generating a random number between 50 and 100
//difference is 100 - 50 = 50, add 1 
console.log(Math.floor(Math.random() * 51) + 50)

console.log(Math.floor(Math.random() * 255))

//accessing string characters at random indexes
let jina = 'Javascript'
let accessNo = Math.random() * 10
console.log(jina.charAt(accessNo))

//Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

